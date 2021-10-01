const express = require('express');
const router = express.Router();

const { ProductController } = require('../controllers');
const { isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', ProductController.get_products);
router.get('/:id', ProductController.get_product);
router.post('/', isAdminVerifier, ProductController.create_product);
router.put('/:id', isAdminVerifier, ProductController.update_product);
router.delete('/:id', isAdminVerifier, ProductController.delete_user);

module.exports = router;