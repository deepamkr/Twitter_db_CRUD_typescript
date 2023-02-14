import express from 'express'
const router =express.Router()
const controller =require('../controllers/read_controller')
const path=require('path')
import {verifyToken} from '../token'


//read user
router.get('/',verifyToken,controller.get);

//find one read one
router.get('/:id',verifyToken,controller.get_by_id)
module.exports= router