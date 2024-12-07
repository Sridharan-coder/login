const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Login = mongoose.model('login', loginSchema);
module.exports = { Login }
