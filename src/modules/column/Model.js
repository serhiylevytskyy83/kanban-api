const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const columnSchema = new Schema({ title: String });

module.exports = mongoose.model('Column', columnSchema);
