import express from 'express'
const router =express.Router()
const controller =require('../controllers/update_controller')

import {verifyToken} from '../middleware/verifyToken'


//update user
router.put('/:id',verifyToken,controller.put)

module.exports= router