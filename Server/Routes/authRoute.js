const express=require('express');
const router=express.Router();
const {validation,signupValidation,loginValudation}=require('../Midelware/validation')
const {SignIn,Signup}=require('../Controllers/authController')
const isAuth=require('../Midelware/Auth')
router.post('/sign-in',loginValudation,validation, SignIn)
router.post('/sign-up',signupValidation,validation,Signup)
  //router 
  router.get('/me',isAuth,(req,res)=>{
    res.send({ user: req.user });
  })
 


module.exports =router