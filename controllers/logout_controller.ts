
require("dotenv").config()
const jwt = require('jsonwebtoken')


module.exports={
    post:async (req:any,res:any)=>{
        
        res.status(400).json({ msg: 'Token Revoked!!!' })

        //console.log(token)
        //res.json("hello")
        
    }
}

