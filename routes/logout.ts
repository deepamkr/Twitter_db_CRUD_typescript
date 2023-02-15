import express from 'express'
const router =express.Router()
const controller =require('../controllers/logout_controller')
import {revokeToken} from '../middleware/verifyToken'

//create post for a user using the uuid

router.post('/',revokeToken,controller.post)

module.exports= router