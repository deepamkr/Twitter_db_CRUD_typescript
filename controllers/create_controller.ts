import db from '../models'

module.exports={
    post:async (req:any,res:any)=>{
        const {email,name,username}= req.body
        //console.log("email:----",email)
        try{
            const user =await db.User.create({email,name,username})
            return res.json(user)
        }
        catch(err){
                console.log(err)
                return res.status(500).json(err)
        }
    }
}