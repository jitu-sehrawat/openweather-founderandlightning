const axios = require('axios');
const Promise = require("bluebird");

const { apiResponder } = require('../utils/apiResponsder')
const { findCityById, findAllcities } = require('../services/city.service');

const OPENWEATHER_API_END_POINT = process.env.OPENWEATHER_API_END_POINT;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

async function getforcast(openWeatherMapCityId) {
  const forcast = await axios({
    method: 'get',
    url: `${OPENWEATHER_API_END_POINT}?id=${openWeatherMapCityId}&appid=${OPENWEATHER_API_KEY}`
  });

  return forcast.data;
}

async function getForcastByCity(req, res) {
  try {
    const cityId = req.params.id;
    const isCity = await findCityById(cityId);

    if (!isCity) {
      throw new Error(`City with id: ${cityId} found.`);
    }

    const forcast = await getforcast(isCity.openWeatherMapCityId);

    apiResponder(req, res, 200, forcast);
  } catch (error) {
    console.error(`Get forcast by city failed. ${error}`);
    apiResponder(req, res, 400, {}, { error: `Get forcast by city failed. ${error.message}` });

  }
}

async function getForcastAllCities(req, res) {
  try {
    const cities = await findAllcities();

    if (cities.length === 0) {
      throw new Error(`Cities not found.`);
    }

    // Parallel API Calls using bluebird Promise.map
    const forcasts = await Promise.map(cities, (city) => {
      return getforcast(city.openWeatherMapCityId);
    }, { concurrency: 10 });

    apiResponder(req, res, 200, forcasts);
  } catch (error) {
    console.error(`Get forcast for all cities failed. ${error}`);
    apiResponder(req, res, 400, {}, { error: `Get forcast for all cities failed. ${error.message}` });
  }
}

module.exports = {
  getForcastByCity,
  getForcastAllCities
}
