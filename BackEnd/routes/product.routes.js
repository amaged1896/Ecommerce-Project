const productController = require("../controllers/product.controller")
const { auth, adminAuth } = require("../middleware/auth.middleware")
const router = require("express").Router()
const multer = require('multer')
const upload = multer({ dest: 'images/products/' })

//add product
router.post("/add", adminAuth, productController.add)
//update product
router.get("/update-product", adminAuth, productController.updateProduct)
//update product image
router.patch('/product-image/:id',adminAuth, upload.single('productImage'), productController.uploadImage)
// get products by categoryId
router.get("/cat-products/:id", productController.getProductsByCatId)
// get all user products
router.get("/my-products", auth, productController.myProducts)
// change product status dependes on quantity 
router.get("/check-availability/:id", productController.checkAvailability)
// delete product
router.delete("/deleteProduct", adminAuth, productController.deleteProduct)    //need test


module.exports = router