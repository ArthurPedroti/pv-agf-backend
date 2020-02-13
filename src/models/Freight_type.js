const { Model, DataTypes } = require("sequelize");

class Freight_type extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Freight_type.removeAttribute("id");
    Freight_type.removeAttribute("createdAt");
    Freight_type.removeAttribute("updatedAt");
  }
}

module.exports = Freight_type;
