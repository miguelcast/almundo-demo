const express = require('express');
const cors = require('cors');
const compression = require('compression')
const config = require('config');
const app = express();

const hotels = require('./data/data');

app.use(cors());
app.use(compression());

// statics files
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  const starts = req.query.starts || null;
  const name = req.query.name || null;
  let hotelsFiltered = [ ...hotels ];

  if (starts && typeof starts === 'string') {
    hotelsFiltered = hotelsFiltered.filter(hotel => starts.includes(hotel.stars));
  }

  if (name && name.length > 0) {
    hotelsFiltered = hotelsFiltered.filter(
      hotel => hotel.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.send(hotelsFiltered)
});

// server
app.listen(config.get('general.port'), () => console.log('Almundo app listening on!'));
