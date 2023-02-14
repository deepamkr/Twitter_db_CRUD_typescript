import db from '../models'

const jwt = require('jsonwebtoken')
const secretKey="secretKey"

module.exports={
    post:async (req:any,res:any)=>{
        const {email,name,username,password}= req.body
        
        try{
            const user =await db.User.create({email,name,username,password})
            jwt.sign({user},secretKey,{expiresIn:'300s'},(err:any,token:any)=>{
                res.status(200).json({ msg: 'Suceccfully login', user,token })
               // res.json({token})
             })
            //return res.json(user)
        }
        catch(err){
                console.log(err)
                return res.status(500).json(err)
        }
    }
}