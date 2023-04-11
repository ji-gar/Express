const monogo=require('mongoose')

const notemodel=monogo.schema({
    title:{
        type:string,
        required:true
    },
    decription:{
        type:string,
        required:true
    },
    userId:{
        type:monogo.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
   


},{timestamps:true})
module.exports=monogo.model("user",notemodel)