
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const userRouter = require('../routes/user.router');

class Server{

    constructor(){
        //....
        this.app = express();
        this.middleware();
        this.routes();
    }

    middleware(){
        //...
        this.app.use(cors());
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