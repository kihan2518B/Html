const mongoose = require('mongoose')
const imageSchema = require('../Schema/image');

const Image = new mongoose.model("image", imageSchema);

module.exports = Image;