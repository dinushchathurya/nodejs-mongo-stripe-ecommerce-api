const express = require('express');
const router = express.Router();

const { ProductController } = require('../controllers');
const { isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', isAdminVerifier, ProductController.get_products);
router.get('/:id', isAdminVerifier, ProductController.get_product);
router.post('/', isAdminVerifier, ProductController.create_product);

module.exports = router;