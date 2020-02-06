const express = require("express");

const SellerController = require("./controllers/SellerController");
const Operation_natureController = require("./controllers/Operation_natureController");
const System_clientController = require("./controllers/System_clientController");

const routes = express.Router();

routes.get("/sellers", SellerController.index);
routes.get("/ons", Operation_natureController.index);
routes.get("/clients", System_clientController.index);

module.exports = routes;
