const userModel = require("../database/models/user.model")
const sendEmailMe = require("../helper/sendEmail.helper")
const fs = require("fs")
const path=require("path")
class User{
    //register New User
    static register = async(req,res)=>{
        try{
            const user = new userModel(req.body)
            user.userType="user"
            await user.save()
            sendEmailMe(user.email, "hello")
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"user added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in register"
            })
        }
    }
// change user to Admin
    static changeToAdmin = async(req,res)=>{
        try{
            const user =await userModel.findById(req.params.id)
            if (!user) {
                res.status(404).send({
                    apiStatus: false,
                    data: null,
                    message: "invalid user id"
                })
            }
            user.userType="admin"
            await user.save()
            res.status(200).send({
                apiStatus: true,
                data:user,
                message:"Admin added successfuly"
            })
        }
        catch(e){   
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"change user to admin error"
            })
        }
    }
    // user login
    static login = async(req,res)=>{
        try{
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus:true,
                data:{user, token},
                message:"logged in"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error:e, message:e.message})
        }
    }

    //get all users
    static getAllUsers = async(req, res) => {
        try{
            const allUsers = await userModel.find()
            res.status(200).send({
                apiStatus:true,
                data:allUsers,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }

    //get single user
    static getSingleUser = async(req, res) => {
        try{
            const userData = await userModel.findById(req.params.id)
            if(!userData){
                res.status(404).send({
                    apiStatus:false,
                    data:null,
                    message:"invalid user id"
                })
            }
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }

    //update password
    static changePassword = async(req,res) =>{
        try{
            // const userData = await userModel.findById(req.params.id)
            const userData= req.user
            userData.password = req.body.password
            await userData.save()
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //update user Data
    static updateUser= async(req,res)=>{
        try{
            const userData = await userModel.findByIdAndUpdate(
                req.user._id,
                req.body,
                {runValidators:true}
                )
            // req.body.for in=> req.user.key=req.body.key
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //user remove his account 
    static deleteUser= async(req,res)=>{
        try{
            const userData = await userModel.findByIdAndDelete(req.user._id)
            res.status(200).send({
                apiStatus:true,
                data:userData,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }
    //remove account by admin
    static deleteUserByAdmin = async (req, res) => {
        try {
            const userData = await userModel.findByIdAndDelete(req.params.id)
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: "user Deleted Successfully"
            })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, error: e, message: e.message })
        }
    }
    // logout from one session
    static logout = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(t=> t.token != req.token)
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out"
            })

        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }
    }

    //logout of all sissions
    static logoutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                message:"logged out"
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, error: e, message:e.message})
        }        
    }
    // get profile Data
    static profile = async(req,res)=>{
        res.status(200).send({apiStatus:true, data:req.user, message:"data featched"})
    }

    // add more addresses
    static addAddr = async(req,res)=>{
        try{
            req.user.addresses.push(req.body)
            await req.user.save()
            res.status(200).send({data:req.user, apiStatus:true, message:"ADDED"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, message:e.message})
        }
    }
    // add profile Image
    static uploadImage=  async(req, res)=>{
        try{
            const ext = path.extname(req.file.originalname)
            const newName = "images/"+req.file.fieldname + Date.now()+ext
            fs.rename(req.file.path, newName, ()=>{})
            req.user.image = newName
            await req.user.save()
            res.send({data:req.user})
        }
        catch(e){
            res.send(e.message)
        }
    }
}
module.exports = User