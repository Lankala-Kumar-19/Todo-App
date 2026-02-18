const express = require('express')

const router = express.Router();

const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
router.post('/register',userController.createUser);
router.post('/login',authController.login);

router.use(authMiddleware.verify)
router.get('/',userController.getAllUsers);

module.exports = router

