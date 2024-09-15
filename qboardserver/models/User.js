const mongoose = require("mongoose");
const bcrypt =  require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
    },
    password: {
        type: String,
        required: true,
        select: false
    }
    
});

userSchema.statics.findUserByCredentials = function findUserByCredentials (username, password) {
    return this.findOne({ username }).select('+password')
        .then((user) => {
        if (!user) {
            return Promise.reject(new Error('Incorrect email or password'));
        }
        return bcrypt.compare(password, user.password)
            .then((matched) => {
            if (!matched) {
                return Promise.reject(new Error('Incorrect email or password'));
            }
            return user;
            });
        });
    };
  

const user = mongoose.model("user", userSchema);
module.exports = user;