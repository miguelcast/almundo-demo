const express = require('express');
const router = express.Router();
const hotelController = require('./src/controllers/hotelController');

// routes
router.get('/', (req, res) => {
  const starts = req.query.starts || null;
  const name = req.query.name || null;
  const hotels = hotelController.getHotels(name, starts);
  res.send(hotels)
});

module.exports = router;
