import db from '../models'
//const express= require('express')
const jwt = require('jsonwebtoken')
//const app = express()
const secretKey="secretKey"


export const get=async (req:any,res:any)=>{
    jwt.verify(req.token,secretKey,async (err: any,authData: any)=>{
        if(err)
        {
            res.send({result: "Invalid token"})
        }
        else{
            try{
                const user= await db.User.findAll()
                return res.json(user)
            }
            catch(err){
                console.log(err)
                return res.status(500).json({error: 'Something went wrong!'})
            }
            // res.json({message:"Profile accessed",
            // authData
            // })
        }
    })
    

}

export const get_by_id=async (req:any,res:any)=>{
    jwt.verify(req.token,secretKey,async (err: any,authData: any)=>{
        if(err)
        {
            res.send({result: "Invalid token"})
        }
        else{
            const id =req.params.id
            try{
                const data= await db.User.findOne({
                    where:{id: id},
                    include:'posts'
                })
                return res.json(data)
            }
            catch(err){
                console.log(err)
                return res.status(500).json({error: 'Something went wrong!'})
            }
                    
        }
    })
    
}
