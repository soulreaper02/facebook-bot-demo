'use strict'

const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// app configuration
app.set('port', (process.env.PORT || 3000));


// setup our express application
app.use(morgan('dev')); // log every request to the console.
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json()); 


// app routes
require('./routes/webhook_verify')(app);

// warming up the engines !! setta !! go !!!.
app.listen(app.get('port'), function() {
  const url = 'http://localhost:' + app.set('port');
  console.log('Application running on port: ', app.get('port'));
});