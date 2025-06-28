const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
    const books = await Book.find({})
    res.render('books/index', { books });
});

router.post('/', async (req, res) => {
    const newBook = new Book(req.body.book);
    await newBook.save();
    res.redirect('/books');
});

router.get('/new', (req, res) => {
    res.render('books/new');
});

router.get('/:id/edit', async (req, res) => {
    const {id} = req.params;
    const book = await Book.findById(id)
    res.render('books/edit', {book});
}) 

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const book = await Book.findByIdAndUpdate(id, {...req.body.book});
    res.redirect(`/books/${book._id}`);

})
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const book = await Book.findById(id)
    res.render('books/show', {book});
});



module.exports = router;