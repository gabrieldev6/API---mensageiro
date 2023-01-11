'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.TEXT,
        notNull:true
      },
      username: {
        type: Sequelize.TEXT,
        notNull:true
      },
      password: {
        type: Sequelize.TEXT,
        notNull:true
      },
      email: {
        type: Sequelize.TEXT,
        notNull:true
      },
      idsql: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        notNull:true
      }
      
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
