
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const dbConnectionDev = async () => {
    try {
        //...
        await mongoose.connect(process.env.CONNECTION_STRING, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});
    } catch (error) {
        //...
        throw new Error('Your connection with database have a problem.');
    }
}

module.exports = {
    dbConnectionDev
}