const path = require('path');
//we cannot use app any longer, because it's defined in the server.js 
//Router, which allows you to declare routes in any file as long as you use the proper middleware.
const router = require('express').Router();

//to create a route to serve index.html
 router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  //to create a route to serve notes.html
 router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });
  //default path when no url route matches
 router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  module.exports = router;