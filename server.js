require('dotenv').config();
require('express-async-errors');

const { app } = require('./app');
const { connect } = require('./configs/database');

async function start() {
  try {
    if (!process.env.PORT) {
      throw new Error(`Startup PORT missing`);
    }
    const port = process.env.PORT;

    // DB connection
    await connect();
    
    app.listen(port, () => {
      console.info(`Server listening on PORT ${port} ...`);
    });
  } catch (error) {
    console.error(`Server start up failed. ${error}`);
    process.exit(1);
  }
};

start();
// MONGO_URL=mongodb+srv://dbuser:dbpassword@cluster0.zdime.mongodb.net/founderandlightning?retryWrites=true&w=majority