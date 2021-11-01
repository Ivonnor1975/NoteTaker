const express = require('express');
const notesarray = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

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

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
