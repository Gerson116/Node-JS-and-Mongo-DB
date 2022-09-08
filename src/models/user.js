
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    //...
    id: { type: String },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    google: { type: Boolean },
    role: { type: String, required: true },
    img: { type: String },
    estado: { type: Boolean, required: true }
});


module.exports =  mongoose.model('User', UserSchema);