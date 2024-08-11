const sequelize = require('sequelize');

const database = new sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = database;