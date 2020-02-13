const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Seller = require("../models/Seller");
const Operation_nature = require("../models/Operation_nature");
const System_client = require("../models/System_client");
const Seller_client = require("../models/Seller_client");
const Product = require("../models/Product");
const Kit_type = require("../models/Kit_type");
const Machine = require("../models/Machine");
const Important_info = require("../models/Important_info");
const Condition = require("../models/Condition");
const Tool_type = require("../models/Tool_type");
const Payment_method = require("../models/Payment_method");
const Freight_type = require("../models/Freight_type");

const connection = new Sequelize(dbConfig);

Seller.init(connection);
Operation_nature.init(connection);
System_client.init(connection);
Seller_client.init(connection);
Product.init(connection);
Kit_type.init(connection);
Machine.init(connection);
Important_info.init(connection);
Condition.init(connection);
Tool_type.init(connection);
Payment_method.init(connection);
Freight_type.init(connection);

// In case to need associate
// Seller.associate(connection.models);

module.exports = connection;
