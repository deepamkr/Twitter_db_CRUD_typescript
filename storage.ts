// import {users} from './seeders/users';

// const createUsers=()=>{
//     users.map(user =>{
//         db.User.create(user)
//     })
// }
// createUsers()

// //create user
// app.use(express.json())

// app.post('/user',async(req,res)=>{
//     const {email,name,username}= req.body
//     try{
//         const user =await db.User.create({email,name,username})
//         return res.json(user)
//     }
//     catch(err){
//             console.log(err)
//             return res.status(500).json(err)
//     }
// })

// //read user
// app.get('/user',async(req,res)=>{
//     try{
//         const user= await db.User.findAll()
//         return res.json(user)
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json({error: 'Something went wrong!'})
//     }
// })

// //find one read one
// app.get('/user/:id',async(req,res)=>{
//     const id =req.params.id
    
//     try{
//         const data= await db.User.findOne({
//             where:{id: id},
//             include:'posts'
//         })
//         return res.json(data)
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json({error: 'Something went wrong!'})
//     }
// })


// //update user
// app.put('/user/:id',async(req,res)=>{
//     const id =req.params.id
//     const {email,name,username}= req.body
//     try{
//         const user= await db.User.findOne({ where:{id: id}})
        
//         user.email=email
//         user.name=name
//         user.username=username
//         await user.save()
        
//         res.status(200).json({message:"User Updated"})
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json({error: 'Something went wrong!'})
//     }
// })

// //delete
// app.delete('/user/:id',async(req,res)=>{
//     const id =req.params.id
//     try{
//         const user= await db.User.findOne({
//             where:{id: id}
//         })
//         await user.destroy()
//         return res.json({message:' User deleted'})
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json({error: 'Something went wrong!'})
//     }
// })

// //create post for a user using the uuid

// app.post('/posts',async(req,res)=>{
//     const {userUuid,tweet}=req.body
    
//     try{
//         const user =await  db.User.findOne({Where:{uuid:userUuid}})
        
//         const post= await db.Post.create({tweet,userId:user.id})
//         return res.json(post)

//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json(err)
//     }
// })

// //GET ALL post from table
// app.get('/posts',async(req,res)=>{
    
//     try{
        
//         // const post= await Post.findAll({include :[ {model:User,as:'user'} ] } )
//         const post= await db.Post.findAll({include: 'user'} )
        
//         return res.json(post)

//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).json(err)
//     }
// })

// //get uuid
// //name
// resizeBy.send("folowers:":count follow,"followers")// new api for both
// //uuid array for loop _____foloower and foll ke liye new api