const Condition = require("../models/Condition");

module.exports = {
  async index(req, res) {
    const conditions = await Condition.findAll();

    return res.json(conditions);
  }
};
