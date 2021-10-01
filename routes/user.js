const express = require('express');
const router = express.Router();

const { accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');
const { UserController } = require('../controllers');

router.get('/', isAdminVerifier, UserController.get_users);
router.get('/:id', isAdminVerifier, UserController.get_user);
router.get('/stats', isAdminVerifier, UserController.get_stats);
router.put('/:id', accessLevelVerifier, UserController.update_user);
router.delete('/:id', isAdminVerifier, UserController.delete_user);

module.exports = router;