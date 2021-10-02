const express = require('express');
const router = express.Router();

const { OrderController } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', isAdminVerifier, OrderController.get_orders);
router.get('/income', isAdminVerifier, OrderController.get_income);
router.get('/:userId', accessLevelVerifier, OrderController.get_order);
router.post('/', authenticationVerifier, OrderController.create_order);
router.put('/:id', isAdminVerifier, OrderController.update_order);
router.delete('/:id', isAdminVerifier, OrderController.delete_order);

module.exports = router;