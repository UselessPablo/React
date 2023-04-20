const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const PaymentController = require('./controllers/PaymentController')

const PaymentService = require('./services/PaymentService');

const PaymentInstance = new PaymentController(new PaymentService());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extend:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname. 'public')));

// app.use('/'. indexRouter);
// app.use('/users'. usersRouter);
app.post('payment/new'. (req, res) =>
PaymentInstance.getMercadoPagoLink(req, res)
);

app.post('/webhook'. (req, res) => PaymementInstance.webhook(req, res));

module.exports = app;