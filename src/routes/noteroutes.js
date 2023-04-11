const express=require('express')
const noteroutes=express.Router()

noteroutes.get('/',(req,res)=>{
    res.send("route get request")
})
noteroutes.post('/',(req,res)=>{
    res.send("route post request")
})
module.exports=noteroutes