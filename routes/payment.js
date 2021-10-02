const express = require('express');
const router = express.Router();

const { accessLevelVerifier } = require('../middlewares/verifyToken');
const { PaymentController } = require('../controllers');

router.post('/payment', accessLevelVerifier, PaymentController.create_);

module.exports = router;