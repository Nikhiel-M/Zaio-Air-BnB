const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
      "listingId": { type: String, required: true },
      "startDate": { type: Date, required: true },
      "endDate": { type: Date, required: true },
      "userId": { type: String, required: true },
});

module.exports = mongoose.model('booking', BookingSchema);
