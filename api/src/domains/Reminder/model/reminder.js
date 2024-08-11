const sequelize = require('sequelize');
const database = require('../../../../config/database');

const Reminder = database.define('Reminder', { 
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title:{
        type: sequelize.STRING,
        allowNull: false,
    },
    date:{
        type: sequelize.DATEONLY,
        allowNull: false,
    },
});

module.exports = Reminder;