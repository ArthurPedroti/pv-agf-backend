const Tool_type = require("../models/Tool_type");

module.exports = {
  async index(req, res) {
    const tool_types = await Tool_type.findAll();

    return res.json(tool_types);
  }
};
