
const User = require('../models/user');
const requestResponse = require('../models/request-response');
const { addUser, editUser, getUser, getUserById, blockOrActiveUser } = require('../services/user.service');
const { body, validationResult } = require('express-validator');

exports.getAllUser = async (req, res) => {
    //....
    const data = await getUser();
    if(data != null){
        res.json(data);
    }else{
        res.status(400).send(requestResponse("Ocurrio un Error", 'no se cargo la data'));
    }
}

exports.searchUserById = async (req, res) => {
    const data = await getUserById(req.params.userId);
    if(data != null && data != undefined){
        console.log('entro')
        res.json(requestResponse("Exito", data));
    }else{
        console.log('no entro')
        res.status(400).send(requestResponse("Ocurrio un Error", 'El usuario que intenta buscar no existe.'));
    }
}

exports.postUser = async (req, res) => {
    let resp = await addUser(req.body);
    const {name, lastname, rol} = req.body;
    if(resp){
        res.json(requestResponse("Exito", {name, lastname, rol}));
    }else{
        res.status(400).send(requestResponse("Ocurrio un Error", null));
    }
}

exports.putUser = async (req, res) =>{
    let resp = await editUser(req.body, req.params.userId);
    if(resp){
        res.json(requestResponse("Exito", "Modificacion realizada exitosamente."));
    }else{
        res.status(400).send(requestResponse("Ocurrio un Error", null));
    }
}

exports.blockUser = async (req, res) => {
    //...
    let resp = await blockOrActiveUser(req.params.userId);
    let actionsPerformed = (resp.estado) ? 'activo' : 'desactivo';
    if(resp != null){
        res.status(200).send(requestResponse("Exito", `Se ${actionsPerformed} con exito el usuario: ${resp.name} ${resp.lastname}`));
    }
    else{
        res.status(400).send(requestResponse("Ocurrio un Error", null));
    }
}