const express=require('express');
const router=express.Router();
const controller=require('../../../controllers/recipes');

router
    .get('/',controller.fetchAll)
    .post('/',controller.create)

module.exports=router;