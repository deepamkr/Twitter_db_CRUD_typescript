'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'password');
  }
};
