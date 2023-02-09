import express from 'express'
const router =express.Router()
const controller =require('../controllers/read_controller')
const path=require('path')



//read user
router.get('/',controller.get);

//find one read one
router.get('/:id',controller.get_by_id)
module.exports= router