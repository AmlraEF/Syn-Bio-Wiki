// Require dependencies
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000
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

app.get('/parts', (req, res) => {
  res.render('Parts');
});

app.get('/modelling', (req, res) => {
  res.render('Modelling');
});

app.get('/human_practices', (req, res) => {
  res.render('HumanPractices');
});

app.get('/bnd', (req, res) => {
  res.render('BnD');
});

app.get('/references', (req, res) => {
  res.render('References');
});

app.get('/description', (req, res) => {
  res.render('Description');
});

app.get('/team', (req, res) => {
  res.render('Team');
});

app.get('/techniques', (req,res) => {
  res.render('Techniques')
})

app.get('/safety', (req,res) => {
  res.render('Safety')
})

<<<<<<< HEAD
app.get('/achievements', (req,res) => {
  res.render('Achievements')
})
=======
app.get('/modelling_ts', (req, res) => {
  res.render('modelling_ts');
});

app.get('/modelling_o', (req, res) => {
  res.render('modelling_o');
});
>>>>>>> dc7e91cccb4e1eeb9721d8677affde51950ca65f

// Catch-all route
app.get('*', (req, res) => {
  res.redirect('/');
});

// Set server to listen on port
app.listen(port, () => {
 console.log(`Server is listening on port ${port}`);
});
