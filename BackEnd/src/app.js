require('../database/connect')
const express= require("express")
const app = express()
app.use(express.json())
const path = require("path")
const staticDir = path.join(__dirname, "../images")
app.use(express.static(staticDir))
app.use(express.urlencoded({extended:true}))
const userRoutes=require("../routes/user.routes")
app.use("/user",userRoutes)
const productRoutes=require("../routes/product.routes")
app.use("/product",productRoutes)
const categoryRoutes = require("../routes/category.routes")
app.use("/category", categoryRoutes)
const cartRoutes = require("../routes/cart.routes")
app.use("/cart", cartRoutes)


module.exports = app