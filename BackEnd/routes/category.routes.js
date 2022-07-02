const categoryController = require("../controllers/category.controller")
const { auth, adminAuth } = require("../middleware/auth.middleware")
const router = require("express").Router()
const multer = require('multer')
const upload = multer({ dest: 'images/categories/' })

// add category
router.post("/add",adminAuth,categoryController.addCat)
// update category
router.patch("/update", adminAuth, categoryController.updateCat)
// show all category
router.get("/all", categoryController.showAll)
// show all category products
router.get("/all-prods", adminAuth, categoryController.showCatProds)
// show my categories
router.get("/my-categories",categoryController.myCategories)
//add category image
router.patch('/image/:id', adminAuth, upload.single('productImage'), categoryController.uploadImage)

// router.patch("/change-status/:id", adminAuth, categoryController.changeStatus)
module.exports = router