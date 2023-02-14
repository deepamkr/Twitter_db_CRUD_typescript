import db from '../models'

const jwt = require('jsonwebtoken')
const secretKey="secretKey"

module.exports={
    post:async (req:any,res:any)=>{
    const { email, password } = req.body;
    try{
        const user= await db.User.findOne( {where: { email: email }})
        if(!user){
            res.status(201).json({ msg: 'User not found' })
        }
        console.log(user.email)
        if(user.password === password){
               jwt.sign({user},secretKey,{expiresIn:'300s'},(err:any,token:any)=>{
               res.status(200).json({ msg: 'Suceccfully login', userid:user.id,token })
              // res.json({token})
            })
            // res.status(200).json({ msg: 'Suceccfully login', userid:user.id })
        }

    else{
        res.status(201).json({ msg: 'password doesnot matched ' })
        }
    }catch(e:any){
        res.status(201).json({ msg: 'Login failed' })
        console.log(e.message)
    }
}
}