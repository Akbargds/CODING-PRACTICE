require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB - USERNAME,
    password: process.env.DB - PASSWORD,
    database: 'coding_practice',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
