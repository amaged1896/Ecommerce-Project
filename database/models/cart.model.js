const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            productId: {
                type: String,
                trim: true
            },
            productName:{
                type: Number,
                default: 1,
            },
            
        },
    ],
},
    {
        timestamps: true
    })

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart