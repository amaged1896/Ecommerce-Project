const productController = require("../controllers/product.controller")
const {auth, adminAuth} = require("../middleware/auth.middleware")
const router = require("express").Router()

router.get("/add", auth, productController.add)
router.get("/myProducts", auth, productController.myProducts)
router.patch("/changeStatus", auth, productController.changeStatus)

module.exports = router