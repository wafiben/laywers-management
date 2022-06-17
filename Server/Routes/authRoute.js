const express=require('express');
const isAdmin=require('../Midelware/isAdmin');
const router=express.Router();
const {validation,signupValidation,loginValudation}=require('../Midelware/validation')
const {SignIn}=require('../Controllers/authController')
const isAuth=require('../Midelware/Auth')
router.post('/sign-in',loginValudation,validation, SignIn);
 
module.exports =router