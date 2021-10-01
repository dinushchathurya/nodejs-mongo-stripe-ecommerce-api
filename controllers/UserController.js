const UserController = {

    async get_user(req, res, next) {
        res.send("test user");
    },
};

module.exports = UserController;