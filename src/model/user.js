const monogo=require("mongoose")

const userScema=  monogo.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true});
module.exports=monogo.model("User",userScema)