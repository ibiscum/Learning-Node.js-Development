import express from 'express';
import * as pkg from 'hbs';
const { registerPartials, registerHelper } = pkg;
// import { appendFile } from 'fs';
// import rateLimit from 'express-rate-limit';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

// Set up rate limiter: max 100 requests per 15 minutes per IP
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100                 // limit each IP to 100 requests per windowMs
// });

// Apply rate limiter to all requests
//app.use(limiter);

registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//   var now = new Date().toString();
//   var log = `${now}: ${req.method} ${req.url}`;
//   console.log(log);
//   appendFile('server.log', log + '\n', (err) => {
//     if (err) {
//       console.log('Unable to append to server.log.');
//     }
//   });
//   next();
// });

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

// app.use(__dirname + '/public');

registerHelper('getCurrentYear', () => {
  //return 'test';
  return new Date().getFullYear()
});

registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req, res) => {
    res.send({
      errorMessage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
