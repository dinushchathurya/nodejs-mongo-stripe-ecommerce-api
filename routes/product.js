const express = require('express');
const router = express.Router();

const { ProductController } = require('../controllers');
const { isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', isAdminVerifier, ProductController.get_products);
router.post('/', isAdminVerifier, ProductController.create_product);

module.exports = router;