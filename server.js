'use strict';

//ad the dotenv library
require('dotenv').config();

//adds express to do the heavy lifting
const express = require('express');
const app = express();

//library that redirects to .env file, if file isn't found, uses 3000 as port
const PORT = process.env.PORT || 3000;

//tell express where to find our index.html. static middleware 
app.use(express.static('./public'));

//tell browser where to look for stuff: create routes including a /hello route for express to listen to (asynchrenous call)
app.get('/hello', (request, response)=> {
  response.status(200).send('Hello');
});

//data route

app.get('/data', (req, res) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well trained'
  }

  res.status(200).json(airplanes);
});

//we want to catch status codes to return user friendly errors. catchall for routes that don't exist
app.use('*', (req, res) => res.send('Sorry this route does not exist'));

//turn on the server so it can listen on the PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

