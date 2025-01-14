const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index'); // Renders the home page
});

router.get('/faq', (req, res) => {
  res.render('faq'); // Renders the FAQ page
});

router.get('/about', (req, res) => {
  res.render('about'); // Renders the About Us page
});

router.get('/resume-examples', (req, res) => {
  res.render('resume-examples'); // Renders the Resume Examples page
});

module.exports = router;
