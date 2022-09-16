
const User = require('../models/user');

const existingMail = async (email = '') => {
    const emailExist = await User.findOne({email: email});
    console.log(emailExist);
    if(emailExist != null){
        throw new Error(`Este correo: ${email} ya esta registrado.`);
    }
}

module.exports = {
    existingMail
};