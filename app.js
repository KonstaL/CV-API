'use strict';

const express = require('express'),
  app = express(),
  Ajv = require('ajv'),
  ajv = new Ajv(),
  schema = require('./schema.json'),
  cv = require('./resume/resume.json');


//configure JSON validator to use schema
let validate = ajv.compile(schema);

//app setup
app.use(express.static(__dirname + '/public'));




app.get('/', (req, res) => {
  if(validate(cv)) {
    res.json(cv);
  } else {
    res.status(500).send('<h1>CV validation failed</h1>');
  }
});

app.get('/gui', (req, res) => {
  res.sendFile('public/myresume.html', {root: __dirname});
});


app.listen(8080, ()=> {
  console.log('Server started!');
});

