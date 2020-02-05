"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      codigo: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numGrupo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descGrupo: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("products");
  }
};
