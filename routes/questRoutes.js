const express = require('express');
const questController = require('../controllers/questController');

const router = express.Router();

router.get('/home', questController.quest_index);
router.post('/', questController.quest_create_question);
router.get('/addsurveyquestions', questController.quest_create_get);
router.get('/surveyquestions', questController.quest_surveyquestions);
router.get('/thankyoupage', questController.quest_thankyou_get);
// router.get('/:id', questController.quest_details);
router.delete('/:id', questController.quest_delete);



module.exports = router;