const { Model, DataTypes } = require("sequelize");

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: DataTypes.STRING,
        descricao: DataTypes.STRING,
        num_grupo: DataTypes.STRING,
        desc_grupo: DataTypes.STRING
      },
      {
        sequelize
      }
    );
    Products.removeAttribute("id");
    Products.removeAttribute("createdAt");
    Products.removeAttribute("updatedAt");
  }
}

module.exports = Products;
