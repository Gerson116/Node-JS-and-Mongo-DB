const mongoose = require('mongoose');
const { Schema } = require("mongoose");


const RoleSchema = new Schema({
    rol: { type: String, required: [true, 'El campo es requerido'] }
});

module.exports = mongoose.model('Roles', RoleSchema);