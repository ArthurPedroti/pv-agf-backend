const { Model, DataTypes } = require("sequelize");

class Payment_method extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Payment_method.removeAttribute("id");
    Payment_method.removeAttribute("createdAt");
    Payment_method.removeAttribute("updatedAt");
  }
}

module.exports = Payment_method;
