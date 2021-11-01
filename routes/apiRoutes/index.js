//add middleware so that our app knows about the routes in animalRoutes.js.
const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

router.use(notesRoutes);

module.exports = router;