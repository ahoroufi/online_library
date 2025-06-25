const express = require('express');
const app = express();
const bookRoutes = require('./routes/books')
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.use('/books', bookRoutes);

app.listen(3000, () => {
    console.log('Serving on port 3000');
})