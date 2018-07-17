// const job = (sequelize, Datatypes) => {
//     return sequelize.define ("job", {
//         Job_role: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isAlphanumeric: true,
//                 len: [1,80],
//                 isLowercase: true
//             }
//         },
//         Job_experience: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isAlphanumeric: true,
//                 len: [1,30],
//                 isLowercase: true
//             }
//         },
//         Job_description: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isAlphanumeric: true,
//                 len: [1,30],
//                 isLowercase: true
//             }
//         },

//         },
//         Job_salary: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             validate: {
//                 isAlphanumeric: true,
//                 len: [1,30],
//                 isLowercase: true
//             }
//         },
//         {
//         Model: associate = (models) => {
//                 job.belongsTo(models.Employer_account);
//                 job.hasOne(models.jobType)
                
//         }}