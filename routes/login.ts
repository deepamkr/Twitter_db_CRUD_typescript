import express from 'express'
const router =express.Router()
const controller =require('../controllers/login_controller')



//create post for a user using the uuid

router.post('/',controller.post)

module.exports= router