const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    productName: {
        type: String,
        trim: true,
        required: true
    },
    productImage: {
        type: String,
        trim: true,
    },
    productQuantity:{
        type:Number,
        required:true
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productDescription:{
        type:String,
        trim:true,

    },
    productReview:{
        type: String,
        trim: true,
    },

    availability: {
        type: Boolean,
        default: true
    },

    isAddedToCart: {
        type: Boolean,
        default: false
    }
},
    { timeStamps: true })
const Product = mongoose.model("Product", productSchema)
module.exports = Product