const { Model, DataTypes } = require("sequelize");

class Condition extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Condition.removeAttribute("id");
    Condition.removeAttribute("createdAt");
    Condition.removeAttribute("updatedAt");
  }
}

module.exports = Condition;
