
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const encrypt = (password) => {
    //...
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const decrypting = (password, hash) => {
    //...
    const resp = bcrypt.compareSync(password, hash);
    if(!resp){
        return resp;
    }
    return resp;
}


 module.exports = {
    encrypt,
    decrypting
 }