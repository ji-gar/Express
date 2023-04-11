const express=require('express')
const connectionUrl="mongodb+srv://jigarpanchal06042002:0$Apr2002@cluster0.nvnysxl.mongodb.net/?retryWrites=true&w=majority"
const app=express()
const monogo=require('mongoose')
const file=require('../data.json')
const noteroutes = require('./routes/noteroutes')
const userRoute = require('./routes/userRoutes')

app.use('/note',noteroutes)
app.use('/user',userRoute)

app.get('/',(req,res)=>{
   
    res.send(file)
})
monogo.connect(connectionUrl).then
(()=>{
    console.log("connected to database")
    app.listen(5000,()=>{
        console.log("server is running on port 5000")
        })
}).catch((err)=>{
    console.log(err)
})



