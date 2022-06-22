const productController = require("../controllers/product.controller")
const { auth, adminAuth } = require("../middleware/auth.middleware")
const router = require("express").Router()
const multer = require('multer')
const upload = multer({ dest: 'images/products/' })

router.get("/add", auth, productController.add)
router.get("/my-products", auth, productController.myProducts)
router.patch("/change-status/:id", adminAuth, productController.changeStatus)
router.patch('/product-image/:id', auth, upload.single('productImage'), productController.uploadImage)

module.exports = router