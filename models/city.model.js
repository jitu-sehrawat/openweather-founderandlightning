const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const CitySchema = new Schema({
  openWeatherMapCityId: {
    type: mongoose.SchemaTypes.Number,
    required: true,
    unique: true
  },
  name: {
    type: mongoose.SchemaTypes.String
  },
  state: {
    type: mongoose.SchemaTypes.String
  },
  country: {
    type: mongoose.SchemaTypes.String
  }
});

const City = mongoose.model('city', CitySchema);
module.exports = City;

// {
//   "id": 1262578,
//   "name": "Muktsar",
//   "state": "",
//   "country": "IN"
// }