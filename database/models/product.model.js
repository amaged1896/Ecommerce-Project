const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    productType:{
        type:String,
        required:true,
        enum:["img", "txt"]
    },
    content:{
        type:String,
        trim:true,
        required: function(){ return this.productType=="txt" }
    },
    file:{
        type:String,
        trim:true,
        required: function(){ return this.productType=="img"}
    },
    status: {
        type: Boolean,
        default: false
    }
},
{timeStamps:true})
const Product= mongoose.model("Product", productSchema)
module.exports = Product