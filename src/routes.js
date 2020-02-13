const express = require("express");

const SellerController = require("./controllers/SellerController");
const Operation_natureController = require("./controllers/Operation_natureController");
const System_clientController = require("./controllers/System_clientController");
const Seller_clientController = require("./controllers/Seller_clientController");
const ProductController = require("./controllers/ProductController");
const Kit_typeController = require("./controllers/Kit_typeController");
const MachineController = require("./controllers/MachineController");
const Important_infoController = require("./controllers/Important_infoController");
const ConditionController = require("./controllers/ConditionController");
const Tool_typeController = require("./controllers/Tool_typeController");
const Payment_methodController = require("./controllers/Payment_methodController");
const Freight_typeController = require("./controllers/Freight_typeController");

const routes = express.Router();

routes.get("/sellers", SellerController.index);
routes.get("/ons", Operation_natureController.index);
routes.get("/systemclients", System_clientController.index);
routes.get("/sellerclients", Seller_clientController.index);
routes.get("/products", ProductController.index);
routes.get("/kits", Kit_typeController.index);
routes.get("/machines", MachineController.index);
routes.get("/importantinfos", Important_infoController.index);
routes.get("/conditions", ConditionController.index);
routes.get("/tooltypes", Tool_typeController.index);
routes.get("/paymentmethods", Payment_methodController.index);
routes.get("/freights", Freight_typeController.index);

module.exports = routes;
