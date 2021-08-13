const express=require('express');
const router=express.Router();
const controller=require('../../../controllers/recipes');

router
    .get('/',controller.fetchAll)
    .post('/',controller.create)
    // .patch('/:id',controller.patchUpdate)
    .delete('/:id',controller.delete)
    .put('/like/:id',controller.like)
    
module.exports=router;