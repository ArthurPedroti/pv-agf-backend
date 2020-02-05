const { Model, DataTypes } = require("sequelize");

class Operation_nature extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Operation_nature.removeAttribute("id");
    Operation_nature.removeAttribute("createdAt");
    Operation_nature.removeAttribute("updatedAt");
  }
}

module.exports = Operation_nature;
