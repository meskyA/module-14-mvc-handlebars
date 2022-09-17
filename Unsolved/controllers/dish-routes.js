// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// It is a controller and it is responsible for handling routes commands to the Model and View parts.
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// Getting all the dishes from the menu
router.get('/', async (req, res) => {
//TODO: Add a comment describing the purpose of the render method
// Renders 'all' Handlebars.js template to connect each route to the correct template.
  res.render('all');
});

module.exports = router;
