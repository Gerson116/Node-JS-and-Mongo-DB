const express = require('express');
const dotenv = require('dotenv').config();
const { check } = require('express-validator');
const { validateFields } = require('../middleware/validate-fields');

const router = express.Router();
const userController = require('../controllers/user.controller');

const pathUserV1 = {
    "get-all-user": `/${process.env.PROJECT_VERSION_V1}/api/get-all-user`,
    "get-user": `/${process.env.PROJECT_VERSION_V1}/api/get-user/:userId`,
    "add-user": `/${process.env.PROJECT_VERSION_V1}/api/add-user`,
    "edit-user": `/${process.env.PROJECT_VERSION_V1}/api/edit-user/:userId`
};

router.get(
    pathUserV1['get-all-user'],
    userController.getAllUser
);

router.get(
    pathUserV1['get-user'],
    userController.searchUserById
);

router.post(
    pathUserV1['add-user'],
    [
        check('name', 'This fields is required').not().isEmpty(),
        check('lastname', 'This fields is required').not().isEmpty(),
        check('password', 'This fields is required').not().isEmpty(),
        check('email', 'This fields is required').isEmail(),
        check('google', 'This fields is required').isBoolean(),
        check('role', 'This fields is required').not().isEmpty(),
        check('img', 'This fields is required').isString(),
        check('estado', 'This fields is required').isBoolean(),
        validateFields
    ],
    userController.postUser
);

router.put(
    pathUserV1['edit-user'],
    [
        check('name', 'This fields is required').not().isEmpty(),
        check('lastname', 'This fields is required').not().isEmpty(),
        check('password', 'This fields is required').not().isEmpty(),
        check('email', 'This fields is required').isEmail(),
        check('google', 'This fields is required').isBoolean(),
        check('role', 'This fields is required').not().isEmpty(),
        check('img', 'This fields is required').isString(),
        check('estado', 'This fields is required').isBoolean(),
        validateFields
    ],
    userController.putUser
);

module.exports = router;