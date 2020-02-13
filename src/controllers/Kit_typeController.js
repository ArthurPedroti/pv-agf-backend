const Kit_type = require("../models/Kit_type");

module.exports = {
  async index(req, res) {
    const kit_types = await Kit_type.findAll();

    return res.json(kit_types);
  }
};
