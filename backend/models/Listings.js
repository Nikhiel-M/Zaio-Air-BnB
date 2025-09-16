const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
      "img": { type: String, required: true },
      "title": { type: String, required: true },
      "description": { type: String, required: true },
      "bath_num": { type: Number, required: true },
      "bed_num": { type: Number, required: true },
      "zip": { type: Number, required: true },
      "address": { type: String, required: true },
      "city": { type: String, required: true },
      "street": { type: String, required: true },
      "price": { type: Number, required: true },
      "sq_ft": { type: Number, required: true },
      "email": { type: String, required: true },
      "userId": { type: Number, required: true },
});

module.exports = mongoose.model('Listing', ListingSchema);
