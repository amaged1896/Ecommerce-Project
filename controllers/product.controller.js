const productModel = require("../database/models/product.model")
class Product{
    static add= async(req,res)=>{
        //detail => req.body, userId=> req.user
        try{
            const productData = new productModel({
                ...req.body,
                userId: req.user._id
            })
            await productData.save()
            res.status(200).send({
                apiStatus:true,
                data:productData,
                message:"added"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    static myProducts = async(req,res)=>{
        // await productModel.find({userId:req.user._id})
        try{
            await req.user.populate("myProducts")
            res.status(200).send({ data: req.user.myProducts })
        }
        catch(e){
            res.status(500).send({err:e.message})
        }
    }
    //change product status
    static changeStatus = async (req, res) => {
        try {
            // await userModel.findByIdAndUpdate(req.params.id, {status:true})
            // const userData = await userModel.findById(req.params.id)
            req.user.status = !req.user.status
            await req.user.save()
            res.status(200).send({
                apiStatus: true,
                data: req.user,
                message: "Status Changed"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }

}
module.exports = Product