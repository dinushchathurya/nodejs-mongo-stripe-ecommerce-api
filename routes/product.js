const express = require('express');
const router = express.Router();

const { ProductController } = require('../controllers');
const { isAdminVerifier } = require('../middlewares/verifyToken');

router.post('/', isAdminVerifier, ProductController.create_product);

module.exports = router;