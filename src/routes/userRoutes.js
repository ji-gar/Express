const express=require('express')
const { signup,signin } = require('../controller/userController')
var bodyParser = require('body-parser')
const userRoute=express.Router()

userRoute.use(bodyParser.urlencoded({ extended: false }))
userRoute.use(bodyParser.json())

userRoute.post('/signin',signin)
userRoute.post('/signup',signup)
module.exports=userRoute