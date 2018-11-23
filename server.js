// Require dependencies
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express('express');

// Use EJS as view engine, rendering .ejs files from the views folder
app.set('view engine', 'ejs');
// Serve static files (stylesheets, images, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/notebook', (req, res) => {
  res.render('Notebook');
});

// Catch-all route
app.get('*', (req, res) => {
  res.redirect('/');
});

// Set server to listen on port
app.listen(port, () => {
 console.log(`Server is listening on port ${port}`);
});