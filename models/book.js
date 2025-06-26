const mongoose = require('mongoose');
const Review = require('./review');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    published_date: Date,
    copies: Number,
    copies_available: Number,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

