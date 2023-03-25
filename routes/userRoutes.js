const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', userController.user_testpage);
userRouter.get('/testpage', userController.user_testpage_get);
userRouter.get('/testedusers', userController.user_testedusers_get);
userRouter.get('/:id', userController.user_usersurvey_get);
userRouter.delete('/:id', userController.user_delete);



module.exports = userRouter;