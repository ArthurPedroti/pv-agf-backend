"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("operation_natures", {
      name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("operation_natures");
  }
};
