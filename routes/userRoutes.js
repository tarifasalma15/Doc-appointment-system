const express = require('express');
const {
    loginController,
    registerController,
    authController} = require ("../controllers/userCtrl");
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

module.exports = router ;