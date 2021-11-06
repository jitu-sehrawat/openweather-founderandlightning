const request = require('supertest');
const { app } = require('../../app');

describe('City Master', () => {
  it('should be able to create city', async () => {
    const response = await request(app)
      .post('/api/v1/master/city/create')
      .send({
        "openWeatherMapCityId": 1258972,
        "name": "Raipur",
        "state": "",
        "country": "IN"
      })
      .expect(201);

    expect(response.body.message).toBe(`City created`);
    expect(response.body.data.name).toBe(`Raipur`);
    expect(response.body.data.country).toBe(`IN`);
    expect(response.body.data.openWeatherMapCityId).toBe(1258972);
  });

  it('should be able to get all cities', async () => {
    // inserting some cities into db
    const responseOne = await request(app)
      .post('/api/v1/master/city/create')
      .send({
        "openWeatherMapCityId": 1258972,
        "name": "Raipur",
        "state": "",
        "country": "IN"
      })
      .expect(201);
    // inserting some cities into db
    const responseTwo = await request(app)
      .post('/api/v1/master/city/create')
      .send({
        "openWeatherMapCityId": 1261481,
        "name": "New Delhi",
        "state": "",
        "country": "IN"
      })
      .expect(201);

    const response = await request(app)
      .get('/api/v1/master/city/')
      .expect(200);

    expect(response.body.message).toBe(`Cities founds`);
    expect(response.body.cityCount).toBe(2);
    expect(response.status).toBe(200);
  });

  it('should be able to get city using id', async () => {
    const city = await request(app)
      .post('/api/v1/master/city/create')
      .send({
        "openWeatherMapCityId": 1258972,
        "name": "Raipur",
        "state": "",
        "country": "IN"
      })
      .expect(201);

    const response = await request(app)
      .get(`/api/v1/master/city/${city.body.data._id}`)
      .expect(200);

    expect(response.body.message).toBe(`City founds`);
    expect(response.body.data.name).toBe(`Raipur`);
    expect(response.body.data.country).toBe(`IN`);
    expect(response.body.data.openWeatherMapCityId).toBe(1258972);
    expect(response.status).toBe(200);
  });
});