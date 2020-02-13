const Machine = require("../models/Machine");

module.exports = {
  async index(req, res) {
    const machines = await Machine.findAll();

    return res.json(machines);
  }
};
