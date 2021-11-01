
const fs = require('fs');

const express = require('express');
//The require() statements will read the index.js files in each of the directories indicated
//the index.js file will be the default file read if no other file is provided
//const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');

//We're going to tell our app to use that port, if it has been set, and if not, default to port 80.
const PORT = process.env.PORT || 3001;

//To instantiate the app server
const app = express();


const { notes } = require('./db/db');

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

function filterByQuery(query, noteArray) {
    let filteredResults = noteArray;
    if (query.id) {
      filteredResults = filteredResults.filter(note => note.id === query.id);
    }
    return filteredResults;
  }


//To make our server listen
app.listen(PORT, () =>{
    console.log(`API server now on port ${PORT}!`);
});