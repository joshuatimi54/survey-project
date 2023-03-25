const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questSchema = new Schema({
    question: {
        type: String,
        required: true
    },
     answer: {
        type: String,
        required: false
    }
    /*,
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type: String,
        required: true
    },
    option5: {
        type: String,
        required: true
    }*/
}, { timestamps: true });

const Quest = mongoose.model('Quest', questSchema);
module.exports = Quest;