const express = require('express');
const cors = require('cors');
const compression = require('compression')
const config = require('config');
const router = require('./router');

const app = express();

app.use(cors());
app.use(compression());

// statics files
app.use(express.static('public'));

app.use('/', router);

// server
app.listen(config.get('general.port'), () => console.log('Almundo app listening on!'));
