const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true, // will trim wide space
        required: [true, 'Please add some text'] // our backend validations
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number'] // our backend validations
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
});


//so we can export to our controller
module.exports = mongoose.model('Transaction', TransactionSchema);