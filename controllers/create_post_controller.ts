import db from '../models'
module.exports={
    post: async (req:any,res:any)=>{
        const {userUuid,tweet}=req.body
    
        try{
            const user =await db.User.findOne({Where:{uuid:userUuid}})
            
            const post= await db.Post.create({tweet,userId:user.id})
            return res.json(post)

        }
        catch(err){
            console.log(err)
            return res.status(500).json(err)
        }
        
    }
}