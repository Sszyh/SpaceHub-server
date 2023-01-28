const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;
const morgan = require('morgan');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Separated Routes for each Resource
const propertiesRouter = require('./routes/properties');
const searchRouter = require('./routes/search')

// Mount all resource routes
app.use('/properties', propertiesRouter);
app.use('/search',searchRouter)



app.get('/message', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});