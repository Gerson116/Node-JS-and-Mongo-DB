const User = require('../models/user');

const getUserById = async (userId) => {
    //...
    try{
        //...
        const data = await User.findOne({_id: userId});
        console.log(data);
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
            const user = User.findByIdAndUpdate(userId, infoUser);
            user.exec((error, data)=>{
                if(error) throw error;
            });
            return true;
        }
    }catch(error){
        console.log(error)
    }
    return false;
}

module.exports = {
    getUser,
    getUserById,
    addUser,
    editUser
}