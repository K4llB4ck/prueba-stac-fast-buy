const express = require('express');
const app = express();
const httpStatus = require('http-status');
const routes = require('./routes/v1');
const helmet = require('helmet');
const { errorConverter, errorHandler } = require('./middlewares/error');


// set security HTTP headers
app.use(helmet());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/v1', routes);


// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);


module.exports = app;