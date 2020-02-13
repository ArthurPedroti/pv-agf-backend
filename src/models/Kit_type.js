const { Model, DataTypes } = require("sequelize");

class Kit_type extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Kit_type.removeAttribute("id");
    Kit_type.removeAttribute("createdAt");
    Kit_type.removeAttribute("updatedAt");
  }
}

module.exports = Kit_type;
