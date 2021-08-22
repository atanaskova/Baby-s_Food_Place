const express=require('express');
const router=express.Router();
const controller=require('../../../controllers/recipes');
const auth_middleware=require('../../../middleware/auth_middleware');

router
    .get('/',controller.fetchAll)
    .post('/',auth_middleware,controller.create)
    // .patch('/:id',controller.patchUpdate)
    .delete('/:id',auth_middleware,controller.delete)
    .put('/like/:id',auth_middleware,controller.like)
    
module.exports=router;