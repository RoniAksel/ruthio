const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    picUrl: { type: String },
    role: { type: String },
    isAdmin: {type: Boolean}
});

let User = mongoose.model("User", userSchema);


module.exports = User;