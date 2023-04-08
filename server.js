const express = require('express');
const path = require('path');

const PORT = 3001;
const app = express();

// creating variable to use data fron notes db
const notesData = require('./db/db.json')

app.use(express.static('public'));

// Get Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
})

// API Routes
app.get('/api/notes', (req, res) => {
  res.json(notesData);
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });