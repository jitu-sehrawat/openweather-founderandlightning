const City = require('../models/city.model');

async function createCity(data) {
  const city = await City.create(data);

  return city;
}

async function findCityByOpenWeatherId(openWeatherMapCityId) {
  const city = await City.findOne({openWeatherMapCityId})

  return city;
}

async function findAllcities() {
  const cities = await City.find({});

  return cities;
}

async function findCityById(id) {
  const city = await City.findById(id)

  return city;
}

module.exports = {
  createCity,
  findCityByOpenWeatherId,
  findAllcities,
  findCityById
}