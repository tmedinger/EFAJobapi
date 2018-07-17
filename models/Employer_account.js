'use strict'

module.exports = (sequelize, DataTypes) => {
    const Employer = sequelize.define('users', {
      Total_job_postings: {
          type: DataTypes.INTEGER
      },
      Uid: { 
          type:DataTypes.INTEGER
      },
      Employer_name: {
          type: DataTypes.STRING,
          allowNull: false,
          max: 80,
          isAlphanumeric:true,
          isLowercase: true
      },
      Employer_contact_name: {
          type: DataTypes.STRING,
          allowNull: false,
          max: 30,
          isAlphanumeric: true,
          isLowercase: true
      },
      Employer_contact_email: {
          isLowercase: true,
          isEmail: true
      },
      Password: {
          type: DataTypes.STRING,
          allowNull: false
      }, 
      Company_url: {
          type: DataTypes.STRING,
          isURL: true
      },
      Employer_description: {

      },
      Employer_location: {
          type:DataTypes.STRING,
          max:80
      }
      
        
    },
    {
        classMethods:{
            associate:function(models){
                Employer.hasMany(models.Job, {foreignKey: 'Employer_Id'})
            }
        }
    }
)
    

    return Employer;
}