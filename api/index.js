const express = require('express');
const cors = require('cors');
const app = express();

const hotels = require('./data/data');

app.use(cors());

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
app.listen(3001, () => console.log('Example app listening on port 3001!'));
