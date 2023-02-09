import express from 'express'
const router =express.Router()
const controller =require('../controllers/get_all_post_controller')
const path=require('path')



//GET ALL post from table
router.get('/',controller.get)
module.exports= router