const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Seller = require("../models/Seller");
const Operation_nature = require("../models/Operation_nature");
const System_client = require("../models/System_client");

const connection = new Sequelize(dbConfig);

Seller.init(connection);
Operation_nature.init(connection);
System_client.init(connection);

// In case to need associate
// Seller.associate(connection.models);

module.exports = connection;
