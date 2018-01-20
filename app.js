'use strict';

const express = require('express'),
  app = express(),
  validator = require('is-my-json-valid'),
  schema = require('./cvSchema'),
  cv = require('./cv');


//configure JSON validator to use schema
const validate = validator(schema);


app.get('/', (req, res) => {
  if(validate(cv)) {
    res.json(cv);
  } else {
    res.json({failed: true});
  }
});

app.listen(8081, ()=> {
  console.log('Server started!');
});

