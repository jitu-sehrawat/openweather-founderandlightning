const express = require('express');
const { getForcastByCity, getForcastAllCities } = require('../controllers/forcast.controller,');
const router = express.Router();

router.get(`/cities`, async (req, res) => {
  getForcastAllCities(req, res);
});

router.get(`/city/:id`, async (req, res) => {
  getForcastByCity(req, res);
});

module.exports = {
  forcastRoute: router
};