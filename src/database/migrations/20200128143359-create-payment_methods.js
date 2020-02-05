"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("payment_methods", {
      name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("payment_methods");
  }
};
