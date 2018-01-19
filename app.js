'use strict';

const express = require('express'),
  app = express(),
  schema = require('./cvSchema');


  let temp = {
    name: {
      firstName: 'Jussi',
      lastName: 'Törmä'
    }
  };

app.get('/', (req, res) => {
  if(schema(temp)) {
    res.json(temp);
  } else {
    res.json({failed: true});
  }
});

app.listen(8080, ()=> {
  console.log('Server started!');
});

