const express = require('express');
const router = express.Router();

const { CartController } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', isAdminVerifier, CartController.get_carts);
router.get('/:userId', accessLevelVerifier, CartController.get_cart)
router.post('/', authenticationVerifier, CartController.create_cart);
router.put('/:id', accessLevelVerifier, CartController.update_cart);
router.delete('/:id', accessLevelVerifier, CartController.delete_cart);

module.exports = router;