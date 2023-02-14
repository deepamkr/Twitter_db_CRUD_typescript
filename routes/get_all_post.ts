import express from 'express'
const router =express.Router()
const controller =require('../controllers/get_all_post_controller')
import {verifyToken} from '../middleware/verifyToken'

//GET ALL post from table


router.get('/',verifyToken,controller.get)
module.exports= router