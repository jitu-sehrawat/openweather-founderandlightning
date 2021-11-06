const express = require('express');
const app = express();

const { cityMasterRoute } = require('./routes/city.route');
const { forcastRoute } = require('./routes/forcast.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.use(`/api/v1/health`, async (req, res) => {
  res.status(200).send('OK');
});

// Routes
app.use(`/api/v1/master/city`, cityMasterRoute);
app.use(`/api/v1/forcast`, forcastRoute);

// Unknow routes
app.use(`*`, async (req, res, next) => {
  res.status(404).send('Route not found.');
});

// Error Handling middleware
app.use((error, req, res, next) => {
  console.error('Error: ', error);
    res.status(500).send(`Something has gone wrong. Please try after sometime ...`);
})

module.exports = {
  app
};