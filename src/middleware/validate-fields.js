
//...
const { validationResult, body } = require('express-validator');
const User = require('../models/user');

const validateFieldsUser = (req, res, next) => {
    //...
    const user = new User(req.body);
    const errors = validationResult(req);
    console.log(errors.isEmpty())
    if(!errors.isEmpty()){
        console.log('entro');
        return res.status(400).json({ errors: errors.array() });
    }
    console.log('no entro');
    next();
}

module.exports = {
    validateFieldsUser
}