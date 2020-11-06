const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`\nListening on port: ${PORT}\n`)
});