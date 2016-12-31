/* globals module require */

const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passHash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ['user']
    },
    favouriteFoodAdditives: [{}]
});

mongoose.model("User", userSchema);
module.exports = mongoose.model("User");