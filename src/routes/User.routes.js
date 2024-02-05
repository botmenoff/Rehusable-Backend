const express = require('express');
const router = express.Router();
// import the controller functions
const UserController = require('../controllers/User.controller.js');
// import the middlewares
const UsersMiddlewares = require('../middlewares/Users.middlewares.js');
// import service
const Services = require('../services/Services.js')

// USERS ROUTES
router.get('/user/verify/:jwt', UserController.verifyEmail);
router.get('/user/get', UserController.getAllUsers);
router.post('/user/login', UsersMiddlewares.veryfyDataLogin, UserController.loginUser)
router.post('/user/register', UsersMiddlewares.verifyUserData, UsersMiddlewares.verificationEmail, UserController.registerUser);
router.post('/user/avatar', Services.upload.single("avatar-image"), UserController.uploadAvatar)
router.delete('/user/delete/:id', UsersMiddlewares.verifyToken, UserController.deleteUsersById);

module.exports = router;