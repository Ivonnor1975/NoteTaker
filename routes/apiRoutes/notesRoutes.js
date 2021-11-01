
const fs = require("fs");
const path = require('path');
//we cannot use app any longer, because it's defined in the server.js 
//Router, which allows you to declare routes in any file as long as you use the proper middleware.
const router = require('express').Router();

// to create a route that the front-end can request data from
let notesarray = require('../../db/db.json');

router.get('/notes', (req, res) => {
  res.json(notesarray);
});

// to create a route for a single animal object
router.delete('/notes/:id', (req, res) => {
  console.log(req.params.id);
  let newNotes = [];
  for(let i = 0; i < notesarray.length; i++) {
      if(notesarray[i].id !== req.params.id) {
          newNotes.push(notesarray[i]);
      }
  }
  notesarray = newNotes;
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesarray, null, 2))
});

  //to create a route to Post or accept data to save on server
  router.post('/notes', (req, res) => {
   // set id based on what the next index of the array will be
   if(req.body) {
        req.body.id = notesarray.length.toString();
        notesarray.push(req.body);
        fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(notesarray, null, 2))
      }
    else{
        res.status(400).send('The note is empty.');
    }
});

module.exports  = router;