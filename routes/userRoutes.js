const express = require('express');
const questController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', questController.quest_testpage);
userRouter.get('/testpage', questController.quest_testpage_get);



module.exports = userRouter;