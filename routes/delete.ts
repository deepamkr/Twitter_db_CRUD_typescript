import express from 'express'
const router =express.Router()
const controller =require('../controllers/delete_controller')
import {verifyToken} from '../middleware/verifyToken'

//delete
router.delete('/:id',verifyToken,controller.delete)

module.exports= router