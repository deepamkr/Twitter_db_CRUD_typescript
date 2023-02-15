require("dotenv").config()
import express from 'express'
const app= express()
const port =process.env.PORT||3000;
import db from './models'

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//for users
app.use('/api/create',require('./routes/create'))
app.use('/api/read',require('./routes/read'))
app.use('/api/update',require('./routes/update'))
app.use('/api/delete',require('./routes/delete'))

//for login
app.use('/api/login',require('./routes/login'))

//for logout
app.use('/api/logout',require('./routes/logout'))

//for posts
app.use('/api/post',require('./routes/create_post'))
app.use('/api/getpost',require('./routes/get_all_post'))

db.sequelize.sync({force:false,alter:true}).then(()=>{
    app.listen(port,()=>{

        console.log(`App listening on port ${port}`)
        console.log("DATABASE CONNECTED!")
        
    })
})
