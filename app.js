const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books')
const ejsMate = require('ejs-mate');
const Book = require('./models/book');

mongoose.connect('mongodb://127.0.0.1:27017/onlineLibrary')
//    .then(() => console.log('✅ Database connected!'))
//    .catch(err => console.error('❌ Mongo Connection error:', err));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected");
})
const path = require('path');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log('Serving on port 3000');
/*
    const existing = await Book.findOne({ isbn: "978-1617295911" });
    if (!existing) {
    const book = new Book({
      title: "Grokking Machine Learning",
      author: "Luis Serrano",
      isbn: "978-1617295911",//978-1617295911
      published_date: new Date("2021-12-14"),
      copies: 4,
      copies_available: 4
    });
    await book.save();
    console.log("Book saved");
  }
*/
});