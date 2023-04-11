const userModel=require('../src/controller/model/user')
const bcrypt=require('bcrypt')
const token=require('jsonwebtoken')

const signup=async(req,res)=>{

const {username,email,password}=req.body
 try{
   
    const hashpassword=await bcrypt.hash(password,10)
    const user=await userModel.create({username:username,email:email,password:hashpassword})

     
 }
    catch(err){
     
     console.log(err)
    }
}
const signin=(req,res)=>{

res.send(req.url)
}
module.exports={signup,signin}
