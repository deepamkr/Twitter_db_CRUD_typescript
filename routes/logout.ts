import express from 'express'
const router =express.Router()
const controller =require('../controllers/logout_controller')
import {verifyToken} from '../middleware/verifyToken'

//create post for a user using the uuid

router.post('/',verifyToken,controller.post)

module.exports= router