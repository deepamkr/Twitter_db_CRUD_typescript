import db from '../models'

module.exports={
    get:async (req:any,res:any)=>{
        try{
        
            // const post= await Post.findAll({include :[ {model:User,as:'user'} ] } )
            const post= await db.Post.findAll({include: 'user'} )
            return res.json(post)
    
        }
        catch(err){
            console.log(err)
            return res.status(500).json(err)
        }
    }
}