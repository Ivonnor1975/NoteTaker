// Require Dependencies
const express = require('express');

// Initialize express app
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Setup data parsing
//Express.js middleware that instructs the server to make certain files available
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//this is our way of telling the server that any time a client 
//navigates to <ourhost>/api, the app will use the router we set up in apiRoutes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Setup listener
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
