const User = require('../models/User');
const bcrypt = require('bcryptjs');

const AuthController = {

    async create_user(req, res, next) {

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        });

        try {
            const user = await newUser.save();
            res.status(201).json({
                type : 'success',
                message: "User has been added successfuly",
                user
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },
};

module.exports = AuthController;