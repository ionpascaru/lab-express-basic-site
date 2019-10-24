// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route:
app.get('/', (req, res, next) => {
  let data = {
    name: "Astrid",
  };
  res.render('home-page', data);
  /* response.sendFile(__dirname + '/views/home-page.html'); */
});

// cat route:
app.get('/astrid', (req, res, next) => {
  let data = {
    name: "Astrid",
    age: "2",
  };
  res.render('photo-gallery', data);
  //response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.get('/about', (req, res, next) => {
  res.render('about');
  //response.sendFile(__dirname + '/views/about.html');
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});