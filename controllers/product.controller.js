const path = require("path")
const fs = require("fs")

const productModel = require("../database/models/product.model")
class Product {
    static add = async (req, res) => {
        //detail => req.body, userId=> req.user
        try {
            const productData = new productModel({ ...req.body, userId: req.user._id })
            await productData.save()
            res.status(200).send({
                apiStatus: true,
                data: productData,
                message: "added"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message })
        }
    }

    //change product status
    static checkAvailability = async (req, res) => {
        try {
            const selectedProduct = await productModel.findById(req.params.id)
            const availability = selectedProduct.productQuantity >0 ? true : false
            res.status(200).send({
                apiStatus: true,
                data: availability,
                message: "availability status returned"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }

    // update category
    static updateProduct = async (req, res) => {
        try {
            const productData = await productModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                { runValidators: true }
            )
            res.status(200).send({
                apiStatus: true,
                data: categoryData,
                message: "Product Data Updated...."
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }

    //upload image
    static uploadImage = async (req, res) => {
        try {
            const productData = await productModel.findById(req.params.id)
            const ext = path.extname(req.file.originalname)
            const newName = "images/products/" + req.file.fieldname + ext
            fs.rename(req.file.path, newName, () => { })
            productData.productImage = newName
            await productData.save()
            res.send({ data: productData })
        }
        catch (e) {
            res.send(e.message)
        }
    }
    // check quantity
    static quantityCheck = async (req, res) => {
        try {
            const productData = await productModel.find(req.params.name)
            await productData.save()
            res.status(200).send({
                apiStatus: true,
                data: productData,
                message: "added"
            })
        }
        catch (e) {
            res.status(500).send({ error: e.message })
        }
    }
// ***************************************************************************************************************
    // user relationship part
    static myProducts = async (req, res) => {
        try {
            await req.user.populate("myProducts")
            res.status(200).send({ data: req.user.myProducts })
        }
        catch (e) {
            res.status(500).send({ err: e.message })
        }
    }

    // category relationship part
    static catProducts = async (req, res) => {
        try {
            await req.user.populate("catProducts")
            res.status(200).send({ data: req.category.catProducts })
        }
        catch (e) {
            res.status(500).send({ err: e.message })
        }
    }
// *************************************************************************************************************
    
    
}
module.exports = Product