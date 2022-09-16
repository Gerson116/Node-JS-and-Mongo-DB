const express = require('express');
const dotenv = require('dotenv').config();
const { check, body } = require('express-validator');
const { validateFieldsUser } = require('../middleware/validate-fields');
const { validatedRole } = require('../helpers/validated-role');
const { existingMail } = require('../helpers/validated-email');

const router = express.Router();
const userController = require('../controllers/user.controller');

const pathUserV1 = {
    "get-all-user": `/${process.env.PROJECT_VERSION_V1}/api/get-all-user`,
    "get-user": `/${process.env.PROJECT_VERSION_V1}/api/get-user/:userId`,
    "add-user": `/${process.env.PROJECT_VERSION_V1}/api/add-user`,
    "edit-user": `/${process.env.PROJECT_VERSION_V1}/api/edit-user/:userId`,
    "block-user": `/${process.env.PROJECT_VERSION_V1}/api/block-user/:userId`
};

router.get(
    pathUserV1['get-all-user'],
    userController.getAllUser
);

router.get(
    pathUserV1['get-user'],
    userController.searchUserById
);

router.post(
    pathUserV1['add-user'],
    [
        check('name', 'Este campo no puede ser nulo.').not().isEmpty(),
        check('lastname', 'Este campo no puede ser nulo.').not().isEmpty(),
        check('password', 'Este campo no puede ser nulo.').not().isEmpty(),
        check('email', 'El formato no es de correo.').isEmail(),
        check('email').custom(existingMail),
        check('google', 'Este campo debe ser tipo buleano.').isBoolean(),
        //Dentro de custom ejecuto una funcion callback que es igual a esto (role)=>validatedRole(role)
        //ocurre que al recibir como parametro role y tenerlo nombredo de la misma manera, puedo ahorrarme expresar la funcion.
        check('rol').custom(validatedRole),
        check('img', 'Debe agregar una ruta').isString(),
        check('estado', 'Este estado debe ser boolean').isBoolean(),
        validateFieldsUser
    ],
    userController.postUser
);

router.put(
    pathUserV1['edit-user'],
    [
        check('name', 'Este campo no puede ser nulo.').not().isEmpty(),
        check('lastname', 'Este campo no puede ser nulo.').not().isEmpty(),
        check('password', 'Este campo no puede ser nulo.').not().isEmpty(),
        check('email', 'El formato no es de correo.').isEmail(),
        check('google', 'Este campo debe ser tipo buleano.').isBoolean(),
        //Dentro de custom ejecuto una funcion callback que es igual a esto (role)=>validatedRole(role)
        //ocurre que al recibir como parametro role y tenerlo nombredo de la misma manera, puedo ahorrarme expresar la funcion.
        check('rol').custom(validatedRole),
        check('img', 'Debe agregar una ruta').isString(),
        check('estado', 'Este estado debe ser boolean').isBoolean(),
        validateFieldsUser
    ],
    userController.putUser
);

router.delete(
    pathUserV1['block-user'],
    userController.blockUser
);

module.exports = router;