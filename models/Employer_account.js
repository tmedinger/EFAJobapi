'use strict'

module.exports = (sequelize, DataTypes) => {
    const Employer = sequelize.define('Employer_account', {
      Total_job_postings: {
          type: DataTypes.INTEGER
      },
      Uid: { 
          type:DataTypes.INTEGER
      },
      Employer_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
          max: 80,
          isAlphanumeric:true,
          isLowercase: true}
      },
      Employer_contact_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
          max: 30,
          isAlphanumeric: true,
          isLowercase: true
          }
      },
      Employer_contact_email: {
          validate:{
          isLowercase: true,
          isEmail: true
          }
      },
      Password: {
          type: DataTypes.STRING,
          allowNull: false
      }, 
      Company_url: {
          type: DataTypes.STRING,
          valdate:{
          isURL: true
          }
      },
      Employer_description: {

      },
      Employer_location: {
          type:DataTypes.STRING,
          validate: {
          max:80
          }
      } 
    },
    {
        
            Model:associate = (models) => {
                Employer.hasMany(models.job)
            }
        
    }
)
    

    return Employer;
}