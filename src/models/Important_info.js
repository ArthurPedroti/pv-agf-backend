const { Model, DataTypes } = require("sequelize");

class Important_info extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Important_info.removeAttribute("id");
    Important_info.removeAttribute("createdAt");
    Important_info.removeAttribute("updatedAt");
  }
}

module.exports = Important_info;
