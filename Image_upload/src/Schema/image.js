const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    contentType: {
        type: String  // MIME type of the image
    }
});

module.exports = imageSchema;