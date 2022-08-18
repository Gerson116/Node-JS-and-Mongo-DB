
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

class Server{

    constructor(){
        //....
        this.app = express();
    }

    middleware(){
        //...
        this.app.use(cors());
    }

    routes(){
        //...
    }

    listen(){
        //...
        this.app.listen( process.env.PORT, () => {
            console.log('this server is running...');
        });
    }
}

module.exports = Server;