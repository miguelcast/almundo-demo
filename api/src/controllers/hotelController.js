const hotels = require('../models/hotel');

class HotelController {
  static getHotels(name, starts) {
    let hotelsFiltered = [ ...hotels ];

    if (starts && typeof starts === 'string') {
      hotelsFiltered = hotelsFiltered.filter(hotel => starts.includes(hotel.stars));
    }

    if (name && name.length > 0) {
      hotelsFiltered = hotelsFiltered.filter(
        hotel => hotel.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return hotelsFiltered;
  }
}

module.exports = HotelController;
