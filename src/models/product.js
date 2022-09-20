
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    categoryId: { type: String },
    enable: { type: Boolean, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);