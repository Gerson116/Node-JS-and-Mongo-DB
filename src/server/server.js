
const express = require('express');
const expressValidate = require('express-validator');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { dbConnectionDev, dbConnectionLocalHost } = require('../../database/conf.db');

const userRouter = require('../routes/user.router');

class Server{

    constructor(){
        this.app = express();
        this.dbConnection();
        this.middleware();
        this.routes();
    }

    async dbConnection(){
        //... conexión a desarrollo.
        // await dbConnectionDev();
        await dbConnectionLocalHost();
    }

    middleware(){
        //...
        this.app.use(cors());
        this.app.use(express.json()); //...This line is use to read JSON in my project.
    }

    routes(){
        //...
        this.app.use(userRouter);
    }

    listen(){
        //...
        this.app.listen( process.env.PORT, () => {
            console.log('this server is running...');
        });
    }
}

module.exports = Server;