const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
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
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
},
    {
        timestamps: true
    })



const Order = mongoose.model("Order", orderSchema)
module.exports = Order