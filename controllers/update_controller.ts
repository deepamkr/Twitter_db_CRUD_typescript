import db from '../models'

module.exports={
    put:async (req:any,res:any)=>{
        const id =req.params.id
        const {email,name,username}= req.body
        try{
            const user= await db.User.findOne({ where:{id: id}})
            
            user.email=email
            user.name=name
            user.username=username
            await user.save()
            
            res.status(200).json({message:"User Updated"})
        }
        catch(err){
            console.log(err)
            return res.status(500).json({error: 'Something went wrong!'})
        }
    }
}