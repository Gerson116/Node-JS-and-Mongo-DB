
//...
const { validationResult } = require('express-validator');
const User = require('../models/user');

const validateFields = (req, res, next) => {
    //...
    const user = new User(req.body);
    const errors = validationResult(user);
    if(!errors.isEmpty()){
        return res.status(400);
    }
    next();
}

module.exports = {
    validateFields
}