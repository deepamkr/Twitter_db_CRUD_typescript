import express from 'express'
const router =express.Router()
const controller =require('../controllers/create_controller')
const path=require('path')
import db from '../models'


//create user
router.use(express.json())

router.post('/',controller.post)
module.exports= router