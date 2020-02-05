const Seller = require("../models/Seller");

module.exports = {
  async index(req, res) {
    const sellers = await Seller.findAll();

    return res.json(sellers);
  }
};
