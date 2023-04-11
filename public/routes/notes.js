const notesRouter = require('express').Router();
const { readFromFile, readAndAppend } = require('../../fsUtils');

// import and testing the uuid function/method
const { v4: uuidv4 } = require('uuid');
console.log(`Here is a test v4 uuid: ${uuidv4()}`);

notesRouter.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));

    // res.sendFile(path.join(__dirname, 'public/notes.html'))
  })



//   Create a get route for a specific uuid on click?
  
  // get all notes from the database
//   notes.get('/api/notes', (req, res) => {
//     // readFromFile('./db/db.json').then((data) => res.json(data));
//     res.json(notesData);
//   })
  
  // create const variable to store the body elements (note-title and note-textarea)
  // I need to actually write this info into the database file - the frontend should already be solved where the save button then regiesters this information
  
  // Give each note a unique ID
  
  // need to get all the previous tips pulled after the resquest is hit so that they can display on the side of the page
  notesRouter.post('/', (req, res) => {
  
    console.log(`A ${req.method} method was hit!`)
  
    let newNote;
  
    if(req.body && req.body.title && req.body.text) {
      newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
      };
  
      readAndAppend(newNote, `./db/db.json`)
      res.send();
    } else {
      res.json(`error`)
    }
  
    console.log(req.body)
  
  })

  module.exports = notesRouter;
