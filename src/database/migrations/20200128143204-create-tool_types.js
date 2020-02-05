"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tool_types", {
      name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tool_types");
  }
};
