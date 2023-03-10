import db from '../models'
//const express= require('express')
const jwt = require('jsonwebtoken')
//const app = express()
const secretKey="secretKey"


export const get=async (req:any,res:any)=>{
    try{
        const user= await db.User.findAll()
        return res.json(user)
    }
    catch(err){
        console.log(err)
        return res.status(500).json({error: 'Something went wrong!'})
    }
    

}

export const get_by_id=async (req:any,res:any)=>{
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
