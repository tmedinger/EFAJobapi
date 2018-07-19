const Job = (sequelize, Datatypes) => {
    return sequelize.define ("job", {
        Job_role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,40],
            }
        },
        Job_experience: {
            type: DataTypes.ARRAY,
            allowNull: false,
            validate: {
                len: [1,120],
            }
        },
        Job_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,240],
            }
        },
        Job_salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1,10],
            }
        },

    Model: associate = (models) => {
            job.belongsTo(models.Employer_account),
            job.hasOne(models.jobType);
        }
    })
}
    
export default Job;
