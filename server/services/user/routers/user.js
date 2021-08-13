const express=require('express');
const router=express.Router();
const controller=require('../../../controllers/auth');

router
    .post('/register',controller.register)
    .post('/login',controller.login)
    // .post('/logout',controller.logout)
    .post('/change-password',controller.changePassword)
    .post('/forgot-password',controller.forgotPassword)
    .post('/reset-password',controller.resetPassword)
    // .get('/confirmation/:token', controller.confirmation);

module.exports=router;