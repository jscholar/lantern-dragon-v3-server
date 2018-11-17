const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
    chapterID: { type: Number, required: true},
    title: { type: String, default: 'Chapter: ' + this.chapterID },
    content: { type: String, required: true },
    book: { type: String },
    volume: { type: String}
});

module.exports = mongoose.model('Chapter', chapterSchema);