
//...
const { validationResult, body } = require('express-validator');
const User = require('../models/user');

const validateFieldsUser = (req, res, next) => {
    //...
    const user = new User(req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = {
    validateFieldsUser
}