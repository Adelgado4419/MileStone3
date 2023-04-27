'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',[
      {username: 'jack', email: 'jakebrown536@gmail.com', password: '!BRown1157',first_name: 'alex', last_name: 'brown', gender: 'male', dateOfBirth: '12/04/2002' },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
