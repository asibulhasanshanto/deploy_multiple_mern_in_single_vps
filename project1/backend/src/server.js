const dotenv = require('dotenv');
const logger = require('./logger');
dotenv.config({ path: `${__dirname}/.env` });
process.on('uncaughtException', () => {
  logger.on('error', () => {
    process.exit(1);
  });
});

const app = require('./app');
require('./startup/db')();

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  logger.info(`API is listening in [${process.env.NODE_ENV}] on port ${PORT}`);
});

process.on('unhandledRejection', () => {
  logger.on('error', () => {
    server.close(() => {
      process.exit(1);
    });
  });
});
