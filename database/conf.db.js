
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const dbConnectionDev = async () => {
    try {
        //...
        console.log('Connect');
        await mongoose.connect(process.env.CONNECTION_STRING);
    } catch (error) {
        //...
        console.log('Not connect');
        throw new Error('Your connection with database have a problem.');
    }
}

const dbConnectionLocalHost = async () => {
    try{
        //...
        console.log('Connect');
        await mongoose.connect(process.env.CONNECTION_STRING_LOCAL_HOST);
    }catch(error){
        //...
        console.log('Not connect');
        throw new Error('Your connection with database have a problem.');
    }
}

module.exports = {
    dbConnectionDev,
    dbConnectionLocalHost
}