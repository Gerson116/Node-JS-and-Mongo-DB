
const express = require('express');
const dotenv = require('dotenv').config();
const router = express.Router();
const { check } = require('express-validator');
const { validateFieldsUser } = require('../middleware/validate-fields');

const productController = require('../controllers/product.controller');

const pathProductV1 = {
    "get-all-product": `/${process.env.PROJECT_VERSION_V1}/api/get-all-product`,
    "get-product": `/${process.env.PROJECT_VERSION_V1}/api/get-product/:productId`,
    "add-product": `/${process.env.PROJECT_VERSION_V1}/api/add-product`,
    "edit-product": `/${process.env.PROJECT_VERSION_V1}/api/edit-product/:productId`,
    "block-product": `/${process.env.PROJECT_VERSION_V1}/api/action-product/:productId`
};

router.get(
    pathProductV1['get-all-product'],
    productController.getAllProduct
);

router.get(
    pathProductV1['get-product'],
    productController.getProduct
);

router.post(
    pathProductV1['add-product'],
    [
        check('name', 'Este campo es obligatorio').not().isEmpty(),
        check('unitPrice', 'Este campo es tipo numerico, favor revisar los campos que envio.').isNumeric(),
        check('categoryId', 'Este campo es obligatorio').not().isEmpty(),
        check('enable', 'Este campo es tipo buleano, favor revisar los datos que intenta enviar').isBoolean(),
        validateFieldsUser
    ],
    productController.addProduct
);

router.put(
    pathProductV1['edit-product'],
    [
        check('name', 'Este campo es obligatorio').not().isEmpty(),
        check('unitPrice', 'Este campo es tipo numerico, favor revisar los campos que envio.').isNumeric(),
        check('categoryId', 'Este campo es obligatorio').not().isEmpty(),
        check('enable', 'Este campo es tipo buleano, favor revisar los datos que intenta enviar').isBoolean(),
        validateFieldsUser
    ],
    productController.editProduct
);

router.delete(
    pathProductV1['block-product'],
    productController.blockOrHability
);

module.exports = router;