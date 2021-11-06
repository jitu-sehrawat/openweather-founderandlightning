const mongoose = require('mongoose');

async function connect() {
  try {
    const MONGO_URL = process.env.MONGO_URL;
    if (!process.env.MONGO_URL) {
      throw new Error(`Database URL missing`);
    }

    await mongoose.connect(MONGO_URL).then(() => {
      console.log(`Database connected.`);
    })
  } catch (error) {
    console.error(`Connection to DB failed. ${error}`);
    throw error;
  }
};

module.exports = {
  connect
}
