const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reminderRouter = require('../src/domains/Reminder/controller/index');
app.use('/reminder', reminderRouter);

const errorHandler = require('../src/middlewares/errorHandler');
app.use(errorHandler);

module.exports = app;