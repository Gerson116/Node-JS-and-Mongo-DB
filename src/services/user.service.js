const User = require('../models/user');
const {validationResult} = require('express-validator');
const { encrypt, decrypting } = require('../services/crypting');

const getUserById = async (userId) => {
    //...
    try{
        //...
        const data = await User.findOne({_id: userId});
        if(data != null){
            return data;
        }
    }catch(error){
        //...
        throw error;
    }
    return null;
}

const getUser = async () => {
    //...
    try{
        //...
        const data = await User.find();
        return data;
    }catch(error){
        throw error;
    }
}

const addUser = async (newUser) => {
    //...
    try{
        const user = new User(newUser);
        const encryptPassword = encrypt(newUser.password);
        user.password = encryptPassword;
        await user.save();
        return true;
    }catch(error){
        console.log(error);
    }
    return false;
}

const editUser = async (infoUser, userId) => {
    try{
        //...
        const userExist = getUserById(userId);
        if(userExist != null){
            const encryptPassword = encrypt(infoUser.password);
            infoUser.password = encryptPassword;
            const user = User.findByIdAndUpdate(userId, infoUser);
            user.exec((error, data)=>{
                if(error) throw error;
            });
            return true;
        }
    }catch(error){
        console.log(error);
    }
    return false;
}

const blockOrActiveUser = async (userId) =>{
    //...
    try{
        //...
        let data = await getUserById(userId);
        if(data.estado == true){
            data.estado = false;
        }else{
            data.estado = true;
        }
        const user = User.findByIdAndUpdate(userId, data);
        user.exec( (error, data) => {
            if(error) throw error;
        });
        return data;
    }catch(error){
        throw new Error(`AN ERROR OCCURRED`);
    }
}

module.exports = {
    getUser,
    getUserById,
    addUser,
    editUser,
    blockOrActiveUser
}