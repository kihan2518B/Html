const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    data: {
        type: Buffer,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    contentType: {
        type: String  // MIME type of the image
    }
});

module.exports = imageSchema;