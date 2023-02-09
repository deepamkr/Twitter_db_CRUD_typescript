import express from 'express'
const router =express.Router()
const controller =require('../controllers/create_post_controller')
const path=require('path')
import db from '../models'

//create post for a user using the uuid

router.post('/',controller.post)

module.exports= router