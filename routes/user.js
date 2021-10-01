const express = require('express');
const router = express.Router();

const { accessLevelVerifier } = require('../middlewares/verifyToken');
const { UserController } = require('../controllers');

router.put('/:id', accessLevelVerifier, UserController.update_user);

module.exports = router;