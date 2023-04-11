const userModel=require('../model/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const SECRETKEY='APITOKEN'
const signup=async(req,res)=>{

const {email,username,password}=req.body
 try{
   
   console.log(password)
    const hashpassword=await bcrypt.hash(password,16)
    const extinguser=await userModel.findOne({email:email})
    if(extinguser){
         return res.status(400).send("user already exist")
    }
    const user=await userModel.create({username:username,email:email,password:hashpassword})
    const token=await jwt.sign({
      email:user.email,
      id:user._id
    },SECRETKEY) 
    res.status(200).json({user:user,token:token})  

     
 }
    catch(err){
     
     console.log(err)
    }
}
const signin=async(req,res)=>{

try{
  const {email,password}=req.body
  const exitinguser=await userModel.findOne({email:email})
  if(!exitinguser){
    res.status(400).json("user not found")
  }
  const crditinal=await bcrypt.compare(password,exitinguser.password)
  if(!crditinal)
  {
     res.status(400).json("invalid password")
  }
  else{
   res
  }
 
   
 
  
 
}
catch(err){

}
}
module.exports={signup,signin}
