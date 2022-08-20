
const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
    id: { type: Number },
    name: { type: String, required: true },
    user: { type: String, required: true }
});

module.exports = mongoose.model('Category', CategorySchema);