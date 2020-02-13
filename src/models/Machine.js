const { Model, DataTypes } = require("sequelize");

class Machine extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Machine.removeAttribute("id");
    Machine.removeAttribute("createdAt");
    Machine.removeAttribute("updatedAt");
  }
}

module.exports = Machine;
