const mongoose = require('mongoose');
const config = require('../config');
module.exports = () => {
  mongoose
    .connect(config.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection successful!'))
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
    });
};
