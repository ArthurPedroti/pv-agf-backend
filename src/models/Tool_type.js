const { Model, DataTypes } = require("sequelize");

class Tool_type extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Tool_type.removeAttribute("id");
    Tool_type.removeAttribute("createdAt");
    Tool_type.removeAttribute("updatedAt");
  }
}

module.exports = Tool_type;
