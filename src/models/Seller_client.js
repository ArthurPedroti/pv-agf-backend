const { Model, DataTypes } = require("sequelize");

class Seller_client extends Model {
  static init(sequelize) {
    super.init(
      {
        razao_social: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        inscricao_estadual: DataTypes.STRING,
        endereco: DataTypes.STRING,
        bairro: DataTypes.STRING,
        municipio: DataTypes.STRING,
        uf: DataTypes.STRING,
        cep: DataTypes.STRING,
        telefone: DataTypes.STRING,
        celular: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }
}

module.exports = Seller_client;
