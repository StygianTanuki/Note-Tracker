const express = require('express');

// Notes Router
const notesRouter = require('./notes');
const app = express();
app.use('/notes', notesRouter);

module.exports = app;