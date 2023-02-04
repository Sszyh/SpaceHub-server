const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;
const morgan = require('morgan');

const cookieSession = require('cookie-session');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieSession({
  name: 'user_id',
  keys: ['key1','key2']
}));

// Separated Routes for each Resource
const propertiesRouter = require('./routes/properties');
const searchRouter = require('./routes/search')
const userRouter = require('./routes/booking')
const hostRouter = require('./routes/host')
// Mount all resource routes
app.use('/properties', propertiesRouter);
app.use('/search',searchRouter)
app.use('/user',userRouter)
app.use('/host',hostRouter)
const usersRouter = require('./routes/users')
const bookRouter = require('./routes/bookings');

// Mount all resource routes
app.use('/properties', propertiesRouter);
app.use('/search',searchRouter);
app.use('/users', usersRouter);
app.use('/bookings',bookRouter)



app.get('/message', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

