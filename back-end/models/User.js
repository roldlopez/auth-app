const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    usuario: String,
    pass: String
});

module.exports = mongoose.model("User", userSchema);