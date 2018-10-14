const express = require('express');

const statusRouter = require('./router/status');
const notFoundRouter = require('./router/notfound');
const eventsRouter = require('./router/events');
var app = express();


app.get('/status', statusRouter);
app.get('/events', eventsRouter);
app.get('/*', notFoundRouter);

app.listen(8000);

console.log('Server is working on 8000 port');