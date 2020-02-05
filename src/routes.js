const express = require("express");

const SellerController = require("./controllers/SellerController");
const Operation_natureController = require("./controllers/Operation_natureController");

const routes = express.Router();

routes.get("/sellers", SellerController.index);

routes.get("/ons", Operation_natureController.index);

module.exports = routes;
