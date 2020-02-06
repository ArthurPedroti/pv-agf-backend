const { Model, DataTypes } = require("sequelize");

class System_client extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo_cliente: DataTypes.STRING,
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
    System_client.removeAttribute("id");
    System_client.removeAttribute("createdAt");
    System_client.removeAttribute("updatedAt");
  }
}

module.exports = System_client;
