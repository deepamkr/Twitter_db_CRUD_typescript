import express from 'express'
const router =express.Router()
const controller =require('../controllers/update_controller')
const path=require('path')



//update user
router.put('/:id',controller.put)

module.exports= router