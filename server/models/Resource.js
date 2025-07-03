const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    course: { type: String },
    type: { type: String },
    author: { type: String },
    link: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resource', resourceSchema);
