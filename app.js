const express = require('express');
const app = express();
const path = require('path');

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/faq', (req, res) => {
  res.render('faq', { title: 'FAQ' });
});

app.get('/resume-examples', (req, res) => {
  res.render('resume-examples', { title: 'Resume Examples' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.get('/get-started', (req, res) => {
  res.render('get-started', { title: 'Get Started' });
});

app.get('/auth/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
