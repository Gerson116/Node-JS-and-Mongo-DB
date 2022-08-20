const express = require('express');
const dotenv = require('dotenv').config();
const router = express.Router();
const userController = require('../controllers/user.controller');

const pathUserV1 = {
    "get-all-user": `/${process.env.PROJECT_VERSION_V1}/api/get-all-user`,
    "get-user": `/${process.env.PROJECT_VERSION_V1}/api/get-user/:userId`,
    "add-user": `/${process.env.PROJECT_VERSION_V1}/api/add-user`,
    "edit-user": `/${process.env.PROJECT_VERSION_V1}/api/edit-user`
};

router.get(
    pathUserV1['get-all-user'],
    userController.getAllUser
);

module.exports = router;