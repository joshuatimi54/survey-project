const User = require('../models/user');

// quest_testpage
const quest_testpage_get = (_req, res) => {
    res.render('quests/testpage', { title: 'Answer the questions' });
}

// quest_testpage
const quest_testpage = (req, res) => {
    const user = new User(req.body);

    user.save()
    .then((_result) => {
        res.redirect('/quests/thankyoupage');
    })
    .catch((err) => {
        console.log(err);
    })
}

// module export to questRoutes
module.exports = {
    quest_testpage_get,
    quest_testpage
}