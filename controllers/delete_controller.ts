import db from '../models'

module.exports={
    delete:async (req:any,res:any)=>{
        const id =req.params.id
        try{
            const user= await db.User.findOne({
                where:{id: id}
            })
            await user.destroy()
            return res.json({message:' User deleted'})
        }
        catch(err){
            console.log(err)
            return res.status(500).json({error: 'Something went wrong!'})
        }
    }
}