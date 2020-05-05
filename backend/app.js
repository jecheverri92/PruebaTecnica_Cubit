const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const userRouter = require('./routes/userRoutes');

const app = express();
var index = require('./routes/index');

//1) Middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.static(path.join(__dirname, `../frontend/dist/frontend`)));

//Routes
app.use('/api/v1/users', userRouter);
app.use('*', index);

module.exports = app;
