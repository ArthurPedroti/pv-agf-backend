const Freight_type = require("../models/Freight_type");

module.exports = {
  async index(req, res) {
    const freight_types = await Freight_type.findAll();

    return res.json(freight_types);
  }
};
