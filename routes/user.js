const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

router.get('/get_user/', UserController.get_user);

module.exports = router;