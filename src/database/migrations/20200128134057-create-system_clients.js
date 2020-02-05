"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("system_clients", {
      codigoCliente: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      razaoSocial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
      inscricaoEstadual: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      celular: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("system_clients");
  }
};
