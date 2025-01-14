const express = require('express');
const router = express.Router();

// Route for login page
router.get('/login', (req, res) => {
  res.render('login');  // Render login page
});

// Route for register page
router.get('/register', (req, res) => {
  res.render('register');  // Render register page
});

module.exports = router;
