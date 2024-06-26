const express = require('express'); // Import express
const router = express.Router(); // Create a router
const Drinks = require('../models/Drinks'); // Import Drinks model
const Sequelize = require('sequelize'); // Import Sequelize
const Op = Sequelize.Op; // Create an instance of Sequelize
const { withAuth } = require('../utility/auth');

// Search for a drink route
router.get('/drink-details', (req, res) => {
    const { id, name, spirit, amount, ingredients, instructions, image } = req.query;
    // console.log("Drink details:", id, name, spirit, amount, ingredients, instructions, image);
    res.render('drink-details', { id, name, spirit, amount, ingredients, instructions, image, isAuthenticated: req.isAuthenticated() });
});

module.exports = router; // Export the router
