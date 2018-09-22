const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//initialising express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

//Home Route
app.get('/', (req,res) => {
  return res.render('home')
})

//Workshop Route
app.get('/workshops', (req,res) => {
  return res.send('workshops')
})

//Events Route
app.get('/events', (req,res) => {
  return res.send('events')
})

//Guest Lectures Route
app.get('/guestlectures', (req,res)=> {
  return res.send('guestlectures')
})

app.get('*', (req,res) => {
  return res.send('ERROR 404 : Page not found.')
})
//Starting Server
app.listen(3000,()=> {
  console.log('Server started on PORT:3000');
})
