const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    question1: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: true
    },
    question2: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },
    
    question4: {
        type: String,
        required: true
    },
    answer4: {
        type: String,
        required: true
    },
    question5: {
        type: String,
        required: true
    },
    answer5: {
        type: String,
        required: true
    },
    
    question7: {
        type: String,
        required: true
    },
    answer7: {
        type: String,
        required: true
    },
    
    question11: {
        type: String,
        required: true
    },
    answer11: {
        type: String,
        required: true
    },
    question12: {
        type: String,
        required: true
    },
    answer12: {
        type: String,
        required: true
    },
    question13: {
        type: String,
        required: true
    },
    answer13: {
        type: String,
        required: true
    }
 
    
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;