const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    facebookId: String,
    goggleId: String,
    admin: {
        type: Boolean,
        default: false
    },
    resetToken: String,
    expireToken: Date
});

const User = mongoose.model("user",userSchema);
module.exports = User;