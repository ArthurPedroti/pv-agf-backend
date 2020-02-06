const System_client = require("../models/System_client");

module.exports = {
  async index(req, res) {
    const system_clients = await System_client.findAll();

    return res.json(system_clients);
  }
};
