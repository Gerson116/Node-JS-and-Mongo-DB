
const mongoose = require('mongoose');
const { Schema } = mongoose;
const category = require('')

const ProductSchema = new Schema({
    id: { type: Number },
    name: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    categoryId: { type: Number },
    enable: { type: Boolean, required: true },
    userId: { type: Number, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);