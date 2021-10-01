const User = require('../models/User');

const AuthController = {

    async create_user(req, res, next) {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        try {
            const user = await newUser.save();
            res.status(201).json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
};

module.exports = AuthController;