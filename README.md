
# Open Weather API

Create an API to show weather data for cities stored within the database, utilising the Open Weather API to collect weather data. Users should be able to add new cities and return 5 day weather data for all cities, or a single city.

## Tech Stack

**Server:** Node(12+), Express

**Database:** MongoDB

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGO_URL`

`OPENWEATHER_API_KEY`

`OPENWEATHER_API_END_POINT`

  
## Deployment

To start this project run

```bash
  npm install
  npm start
```

  
## API Reference##

# URL

```http
  localhost:3000
```

#### Healthcheck

```http
  GET /api/v1/health
```

#### Add City

```http
  POST /api/v1/master/city/create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `openWeatherMapCityId`      | `number` | **Ex**: 1258972 |
| `name`      | `string` | **Ex**: "Delhi" |
| `state`      | `string` | **Ex**: "" |
| `country`      | `string` | **Ex**: "IN" |


#### Get all cities

```http
  GET /api/v1/master/city/
```


#### Get a city

```http
  GET /api/v1/master/city/{id}
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | valid city id |


#### Forcast for a city

```http
  GET /api/v1/forcast/city/{id}
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | valid city id |


#### Forcast all cities

```http
  GET /api/v1/forcast/cities
```


## Documentation

[Postman Collection](https://documenter.getpostman.com/view/4150890/UVC3jTVa)


## Test Cases

Test cases for City master has added:

```bash
  npm install
  npm test
```

## TODO: additional functionality or improvements

- Add test cases for forcast Endpoints
- Add test cases for city and forcast services
- Add Cache mechanism for list of cities
- Add Cache mechanism for Open weather APi by cityid
- Add Auth mechanism for protected route
- Add Rate limiter to getForcast endpoint
- Add generic Error handling process of various kind of errors
- Add log mechanism for system