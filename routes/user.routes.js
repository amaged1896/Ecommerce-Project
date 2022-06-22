const multer  = require('multer')
const upload = multer({ dest: 'images/' })
const userController = require("../controllers/user.controller")
const router = require("express").Router()
const { auth, adminAuth } = require("../middleware/auth.middleware")
//add user
router.post("/register", userController.register)
router.post("/addAdmin",adminAuth, userController.addAdmin)
//login user
router.post("/login", userController.login)
//get all users
// router.get("/all", auth, userController.getAllUsers)            //waiting for dash-board
//get single user
// router.get("/all/:id", auth, userController.getSingleUser)    // waiting...if needed
//update status (activate - deactivate)

//update user
router.patch("/update", auth, userController.updateUser)
//update password
router.patch("/updatePassword", auth, userController.changePassword)
//remove account
router.delete("/delete", userController.deleteUser)
//add Address to user
router.post("/addAddr", auth, userController.addAddr)
router.patch('/profile', auth, upload.single('profile'), userController.uploadImage)
module.exports=router