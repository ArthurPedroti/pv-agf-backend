const Operation_nature = require("../models/Operation_nature");

module.exports = {
  async index(req, res) {
    const operation_natures = await Operation_nature.findAll();

    return res.json(operation_natures);
  }
};
