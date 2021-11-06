async function apiResponder(req, res, status = 400, data = {}, error = '') {
  if (error) {
    data = error;
  }
  res.status(status).send(data);
}

module.exports = {
  apiResponder
}