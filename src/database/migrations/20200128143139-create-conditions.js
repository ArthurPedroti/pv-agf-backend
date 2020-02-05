"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("conditions", {
      name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("conditions");
  }
};
