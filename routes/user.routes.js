const multer  = require('multer')
const upload = multer({ dest: 'images/profile/' })
const userController = require("../controllers/user.controller")
const router = require("express").Router()
const { auth, adminAuth } = require("../middleware/auth.middleware")

// main website Routes

//Register New User ===>first step *
router.post("/register", userController.register)
//login user ==>second step *
router.post("/login", userController.login)
//update user
router.patch("/update", auth, userController.updateUser)
//update password
router.patch("/update-password", auth, userController.changePassword)
//add Addresses to user
router.post("/add-address", auth, userController.addAddr)
// add profile image
router.patch('/profile', auth, upload.single('profile'), userController.uploadImage)
//user remove his account
router.delete("/delete-my-account", auth, userController.deleteUser)
// logout from all sessions
router.post("/logout-all", auth, userController.logoutAll)
//logout from existing session
router.post("/logout", auth, userController.logout)

// Dashbord-User-Routes

//get all users
router.get("/all", userController.getAllUsers)
//get single user
router.get("/single/:id", auth, userController.getSingleUser) 
//change user to Admin
router.patch("/addAdmin/:id", adminAuth, userController.changeToAdmin)
//remove account by admin
router.delete("/delete-user/:id", adminAuth, userController.deleteUserByAdmin)


module.exports=router