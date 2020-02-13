const Payment_method = require("../models/Payment_method");

module.exports = {
  async index(req, res) {
    const payment_methods = await Payment_method.findAll();

    return res.json(payment_methods);
  }
};
