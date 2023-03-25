const Quest = require('../models/quest');


/* quest_index
const quest_index = (_req, res) => {
    Quest.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('quests/index', { title: 'All Blogs', blogs: result })
    })
    .catch((err) => {
        console.log(err);
    })
}

// blog_details
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('blogs/details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
        console.log(err);
    });
    
    
    
}
*/

// quest_surveyquestion

const quest_index = (_req, res) => {
        res.render('quests/index', { title: 'Home page' });
}

// quest_surveyquestions
const quest_surveyquestions = (_req, res) => {
    Quest.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('quests/surveyquestions', { title: 'Questions', quests: result });
    })
    .catch((err) => {
        console.log(err);
    })
}


// quest_create_get
const quest_create_get = (_req, res) => {
    res.render('quests/addsurveyquestions', { title: 'Create a new Question' });
}

// quest_create_question
const quest_create_question = (req, res) => {
    const quest = new Quest(req.body);

    quest.save()
    .then((_result) => {
        res.redirect('/quests/surveyquestions');
    })
    .catch((err) => {
        console.log(err);
    })
}

// quest_thankyou_get
const quest_thankyou_get = (_req, res) => {
    res.render('quests/thankyoupage', { title: 'Thank you' });
}

// quest_create_delete
const quest_delete = (req, res) => {
    const id = req.params.id;

    Quest.findByIdAndDelete(id)
    .then(_result => {
        res.json({ redirect: '/quests/surveyquestions' });
    })
    .catch(err => {
        console.log(err);
    })
}



// module export to questRoutes
module.exports = {
    quest_index,
    quest_create_get,
    quest_thankyou_get,
    quest_surveyquestions,
    quest_create_question,
    quest_delete
}