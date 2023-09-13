const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtil');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Grabs the route in order to retrieve the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// Posts the route
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    // Reads the note
    readAndAppend(newNote, './db/db.json');

    // If it was successful then it will pop up this message
    res.json(`Note added successfully`);
  } else {
    // Returns this error if a note cannot be added
    res.error('Error in adding Note');
  }
});

module.exports = notes;