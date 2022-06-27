const path = require("path")
const fs = require("fs")

const categoryModel = require("../database/models/category.model")

class Category {
    static addCat = async (req, res) => {
        //detail => req.body, userId=> req.user
        try {
            const categoryData = await new categoryModel({ ...req.body, userId: req.user._id })
            categoryData.save()
            res.status(200).send({
                apiStatus: true,
                data: categoryData,
                message: "category added successfuly"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message })
        }
    }
    static showAll = async(req,res)=>{
        try{
            const catData = await categoryModel.find()
            catData.save()
            res.status(200).send({
                data:catData,
                apiStatus:true,
                message:"all categories fetched successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus: false,
                error:e,
                message:e.message
            })
        }
    }


    // RelationShip part
    // static myProducts = async (req, res) => {
    //     // await categoryModel.find({userId:req.user._id})
    //     try {
    //         await req.user.populate("myProducts")
    //         res.status(200).send({ data: req.user.myProducts })
    //     }
    //     catch (e) {
    //         res.status(500).send({ err: e.message })
    //     }
    // }



    //change product status
    static changeStatus = async (req, res) => {
        try {
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            const categoryData = await categoryModel.findById(req.params.id)
            categoryData.status = !categoryData.status
            await categoryData.save()
            res.status(200).send({
                apiStatus: true,
                data: categoryData,
                message: "Status Changed"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }
    //upload image
    static uploadImage = async (req, res) => {
        try {
            const categoryData = await categoryModel.findById(req.params.id)
            const ext = path.extname(req.file.originalname)
            const newName = "images/categories/" + req.file.fieldname + ext
            fs.rename(req.file.path, newName, () => { })
            categoryData.productImage = newName
            await categoryData.save()
            res.send({ data: categoryData })
        }
        catch (e) {
            res.send(e.message)
        }
    }

}
module.exports = Category