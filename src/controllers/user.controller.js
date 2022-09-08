
const User = require('../models/user');
const requestResponse = require('../models/request-response');
const { addUser, editUser, getUser, getUserById } = require('../services/user.service');

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
    if(resp){
        res.json(requestResponse("Exito", req.body));
    }else{
        res.status(400).send(requestResponse("Ocurrio un Error", null));
    }
}

exports.putUser = async (req, res) =>{
    let resp = await editUser(req.body, req.params.userId);
    if(resp){
        res.json(requestResponse("Exito", "Los"));
    }else{
        res.status(400).send(requestResponse("Ocurrio un Error", null));
    }
}