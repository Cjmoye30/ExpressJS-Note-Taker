// boilerplate requirements
const express = require('express');
const path = require('path');
// const { readAndAppend, readFromFile } = require('./fsUtils');
const api = require('./public/routes/index.js')

const PORT = 3001;
// const notesData = require('./db/db.json')
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// Get route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Get route for the feedback page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});