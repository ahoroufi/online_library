const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
    const books = await Book.find({})
    res.render('books/index', { books });
})

module.exports = router;