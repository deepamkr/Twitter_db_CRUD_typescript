import express from 'express'
const router =express.Router()
const controller =require('../controllers/delete_controller')
const path=require('path')
import db from '../models'

//delete
router.delete('/:id',controller.delete)

module.exports= router