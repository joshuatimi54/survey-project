const express = require('express');
const AuthController = require('../controllers/AuthController');

const authRouter = express.Router();


authRouter.get('/', AuthController.authorization);
authRouter.post('/register', AuthController.register);
// authRouter.get('/', AuthController.user_testedusers_get);
// authRouter.get('/:id', AuthController.user_usersurvey_get);
// authRouter.delete('/:id', AuthController.user_delete);



module.exports = authRouter;