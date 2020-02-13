const Seller_client = require("../models/Seller_client");

module.exports = {
  async index(req, res) {
    const seller_clients = await Seller_client.findAll();

    return res.json(seller_clients);
  }
};
