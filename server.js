// boilerplate requirements
const express = require('express');
const path = require('path');
const { readAndAppend, readFromFile } = require('./fsUtils');


// requuired for unique IDs
const uuid = require('uuid');
console.log(`Here is a test v1 uuid: ${uuid.v1()}`);
console.log(`Here is a test v4 uuid: ${uuid.v4()}`);

const PORT = 3001;
const notesData = require('./db/db.json')
const app = express();


// query selectors
// const saveButton = document.querySelector('.save-note');

// creating variable to use data fron notes db

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

// API Routes
// get all notes from the database
app.get('/api/notes', (req, res) => {
  // readFromFile('./db/db.json').then((data) => res.json(data));
  res.json(notesData);
})

// create const variable to store the body elements (note-title and note-textarea)
// I need to actually write this info into the database file - the frontend should already be solved where the save button then regiesters this information

// Give each note a unique ID

// need to get all the previous tips pulled after the resquest is hit so that they can display on the side of the page
app.post('/api/notes', (req, res) => {

  console.log(`A ${req.method} method was hit!`)

  let newNote;

  if(req.body && req.body.title && req.body.text) {
    newNote = {
      title: req.body.title,
      text: req.body.text,
      note_id: uuid()
    };

    readAndAppend(newNote, `./db/db.json`)
    res.send();
  } else {
    res.json(`error`)
  }

  console.log(req.body)

})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});