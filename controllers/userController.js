const User = require('../models/user');

// user_testpage
const user_testpage_get = (_req, res) => {
    res.render('quests/testpage', { title: 'Answer the questions' });
}

// user_testpage
const user_testpage = (req, res) => {
    const user = new User(req.body);

    user.save()
    .then((_result) => {
        res.redirect('/quests/thankyoupage');
    })
    .catch((err) => {
        console.log(err);
    })
}

// user_testedusers
const user_testedusers_get = (_req, res) => {
   User.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('quests/testedusers', { title: 'Result for survey', users: result  });
    })
    .catch((err) => {
        console.log(err);
    })
}

// user_usersurvey
const user_usersurvey_get = (req, res) => {
    const id = req.params.id;

   User.findById(id)
    .then(result => {
        res.render('quests/usersurvey', { title: 'Result for individual survey', users: result  });
    })
    .catch((err) => {
        console.log(err);
    })
}


// user_create_delete
const user_delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
    .then(_result => {
        res.json({ redirect: '/quests/testedusers' });
    })
    .catch(err => {
        console.log(err);
    })
}



 
// module export to userRoutes
module.exports = {
    user_usersurvey_get,
    user_testedusers_get,
    user_testpage_get,
    user_delete,
    user_testpage
}