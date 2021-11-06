const { apiResponder } = require('../utils/apiResponsder')
const {
  createCity,
  findAllcities,
  findCityById,
  findCityByOpenWeatherId
} = require('../services/city.service');

async function create(req, res) {
  try {
    const { openWeatherMapCityId, name, state, country, coord } = req.body;
    const isCity = await findCityByOpenWeatherId(openWeatherMapCityId);

    if (isCity) {
      throw new Error(`City With ${openWeatherMapCityId} already exists.`);
    }

    const city = await createCity({ openWeatherMapCityId, name, state, country, coord });
    const response = {
      message: 'City created',
      data: city
    }

    apiResponder(req, res, 201, response);
  } catch (error) {
    console.error(`Create City failed. ${error}`);
    apiResponder(req, res, 400, {}, { error: `Create City failed. ${error.message}` });
  }
}

async function getAll(req, res) {
  try {
    const cities = await findAllcities();
    const response = {
      message: 'Cities founds',
      cityCount: cities.length,
      data: cities
    }

    apiResponder(req, res, 200, response);
  } catch (error) {
    console.error(`Cities found failed. ${error}`);
    apiResponder(req, res, 400, {}, { error: `Cities found failed. ${error.message}` });
  }
}

async function getCity(req, res) {
  try {
    const { id } = req.params;
    const city = await findCityById(id)
    const response = {
      message: 'City founds',
      data: city
    }

    apiResponder(req, res, 200, response);
  } catch (error) {
    console.error(`City founds failed. ${error}`);
    apiResponder(req, res, 400, {}, { error: `City founds failed. ${error.message}` });
  }
}

module.exports = {
  create,
  getAll,
  getCity
}