const express = require("express");

const SellerController = require("./controllers/SellerController");
const Operation_natureController = require("./controllers/Operation_natureController");
const System_clientController = require("./controllers/System_clientController");
const ProductController = require("./controllers/ProductController");

const routes = express.Router();

routes.get("/sellers", SellerController.index);
routes.get("/ons", Operation_natureController.index);
routes.get("/clients", System_clientController.index);
routes.get("/products", ProductController.index);

module.exports = routes;
