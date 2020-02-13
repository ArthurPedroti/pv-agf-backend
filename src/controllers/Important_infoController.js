const Important_info = require("../models/Important_info");

module.exports = {
  async index(req, res) {
    const important_infos = await Important_info.findAll();

    return res.json(important_infos);
  }
};
