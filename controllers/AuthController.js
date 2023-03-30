const Auth = require('../models/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// authorization
const authorization = (_req, res) => {
    res.render('auth/index');
}

// register_controller
const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(eer, hashedPass) {
        if(err) {
            console.log(err);
        }
    })
    let auth = new Auth ({
        name: req.body.name,
        password: hashedPass
    })
    auth.save()
    .then(auth => {
        res.json({
            message: 'User Added Successfully'
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

 
// module export to userRoutes
module.exports = {
    authorization,
    register
}