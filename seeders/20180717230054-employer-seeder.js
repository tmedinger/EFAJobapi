'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Employer_account',
    [
      {
        Total_job_postings: '',
        Employer_name: 'John',
        employer_contact_name: 'Doe',
        Employer_contact_email: 'test@test.com',
        password: 'thisismypassword',
        Company_url: '',
        Employer_description: '',
        Employer_description: '',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          Total_job_postings: '',
          Employer_name: 'Company Place',
          employer_contact_name: 'JohnMcCompanyGuy',
          Employer_contact_email: 'email@company.com',
          password: 'sicknastyguy',
          Company_url: 'www.radical.com',
          Employer_description: 'its rad',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          Total_job_postings: '',
          Employer_name: 'Company Place',
          employer_contact_name: 'JohnMcCompanyGuy',
          Employer_contact_email: 'email@company.com',
          password: 'sicknastyguy',
          Company_url: 'www.radical.com',
          Employer_description: 'its rad',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
    
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
