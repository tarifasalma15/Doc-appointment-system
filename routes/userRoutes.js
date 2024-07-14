const express = require('express');
const {
    loginController,
    registerController,
    authController, 
    googleLoginController, 
    googleRegisterController} = require ("../controllers/userCtrl");
const authMiddleware = require('../middleware/authMiddleware');

// router onject 
const router = express.Router();

// routes 

//login || POST 
router.post('/login', loginController);

// register || POST 
router.post('/register', registerController);

//Auth || POST 
router.post('/getUserData', authMiddleware,authController);

// Google Login || POST
router.post('/google-login', googleLoginController);

// Google Register || POST
router.post('/google-register', googleRegisterController);




module.exports = router ;

