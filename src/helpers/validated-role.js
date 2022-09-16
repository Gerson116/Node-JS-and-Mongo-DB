
const Roles = require('../models/role');
const {validationResult} = require('express-validator');

const validatedRole = async (rol = '') => {
    //....
    let rolExist = await Roles.findOne({rol});
    if( !rolExist ){
        throw new Error(`El rol no existe en base de datos ${rolExist}`);
    }
}

module.exports = {
    validatedRole
}