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

//Automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block'; 
  dots[slideIndex-1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
