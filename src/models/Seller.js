const { Model, DataTypes } = require("sequelize");

class Seller extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Seller.removeAttribute("id");
    Seller.removeAttribute("createdAt");
    Seller.removeAttribute("updatedAt");
  }
}

module.exports = Seller;
