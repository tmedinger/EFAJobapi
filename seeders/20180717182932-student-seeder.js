'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('students', [{
        first_name: 'John',
        last_name: 'Doe',
        email: 'test@test.com',
        password: 'thisismypassword',
        resume: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
