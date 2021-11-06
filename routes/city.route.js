const express = require('express');
const { create, getAll, getCity } = require('../controllers/city.controller');
const router = express.Router();

router.post(`/create`, async (req, res) => {
  create(req, res);
});

router.get(`/`, async (req, res) => {
  getAll(req, res);
});

router.get(`/:id`, async (req, res) => {
  getCity(req, res);
});

module.exports = {
  cityMasterRoute: router
};