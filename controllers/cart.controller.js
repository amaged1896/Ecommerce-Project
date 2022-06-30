const cartModel = require("../database/models/cart.model")
const productModel = require("../database/models/product.model")

class Cart {
    static add = async (req, res) => {
        try {
            const productData = await productModel.findById(req.params.id)
            const cartData = new cartModel({
                userId: req.user._id,
                productName: productData._id, productName:productData.productName
            })
            await cartData.save()
            res.status(200).send({
                apiStatus: true,
                data: cartData,
                message: "product added to cart successfully"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, message: e.message })
        }
    }
    static updateCart = async (req, res) => {
        try {
            const updateCart = await cartModel.findByIdAndUpdate(req.params.id)
            updateCart.data = req.body.data
            await updateCart.save()
            res.status(200).send({
                apiStatus: true,
                data: updateCart,
                message: "Update Product cart"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }

    //delete
    static deleteCart = async (req, res) => {
        try {
            const cartData = await cartModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus: true,
                data: cartData,
                message: "Delete Product Cart"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }

    //showcart
    static myCart = async (req, res) => {
        try {
            const cartData = await cartModel.findOne({ userId: req.user._id })
            res.status(200).send({
                apiStatus: true,
                data: cartData,
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }

    /* 
    static myCart = async(req,res)=>{
        // await productModel.find({userId:req.user._id})
        try{
            await req.user.populate("myCart")
            res.status(200).send({data:req.user.myCart})
        }
        catch(e){
            res.status(500).send({err:e.message})
        }
    }
*/

    //showAll
    static allCart = async (req, res) => {

        try {
            allCart = await cartModel.find();
            res.status(200).send({
                apiStatus: true,
                data: allCart,
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }

}
module.exports = Cart