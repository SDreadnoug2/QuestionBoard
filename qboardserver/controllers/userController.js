const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {JWT_SECRET} = require("../utils/config");
const { exists } = require("../models/Question");


module.exports.register = (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;
    return User.findOne({username}).then((user) => {
        if(!user){
            return bcrypt.hash(password, 10).then((hashword) => {
                User.create({username, password: hashword});
            }).then((user) => {
                console.log(user);
                res.send({username: user.username});
            })
        } else {
             new Error('User Exists');
        }
    })
}

module.exports.login = (req, res) => {
    const {username, password} = req.body;
    return User.findUserByCredentials(username, password)
    .then((user) => {
        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: "7d"})
        res.send({token});
    })
}

module.exports.getUserInfo = (req, res) => {
    User.findById(req.user.id).then((user) => {
        if(!user){
            return new Error('User doesnt exist...');
        } else {
            res.send(user);
        }
    })
}