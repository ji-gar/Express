const jwt=require('jsonwebtoken')
const SECRETKEY='APITOKEN'
const auth=(req,res,next)=>{

    try{
      let requestheader=req.headers.authorization
      if(requestheader)
      {
        requestheader=requestheader.spilt(" ")[1]
        let tokenverify=jwt.verify(requestheader,SECRETKEY)
        req.userid=tokenverify.id

      }
      else{
        res.status(401).json("unauthorized user")
      }
      next()
    }
    catch(err){
      console.log(err)
      res.status(401).json("unauthorized user")
    }

}