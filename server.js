const fs = require('fs');
const path = require('path');

const express = require('express');
const notesarray = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

function findById(id, nArray) {
    const result = nArray.filter(note => note.id === id)[0];
    return result;
}

app.get('/api/notes', (req, res) => {
  res.json(notesarray);
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notesarray);
    if (result) {
        res.json(result);
      } else {
        res.send(404);
      }
});

app.post('/api/notes', (req, res) => {
   // set id based on what the next index of the array will be
   if(req.body) {
        req.body.id = notesarray.length.toString();
        notesarray.push(req.body);
        fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(notesarray, null, 2))
        }
});
  
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
