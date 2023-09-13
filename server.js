// Loads the install package for express
const express = require('express');
const path = require('path');
const api = require('./routes/api');

// Creates a server with the name app
const app = express();

// ALlows the port to be set
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use('/api', api);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET route for the start page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for the notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Shows that the server is listening at the port
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);