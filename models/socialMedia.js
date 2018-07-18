module.exports = (sequelize, DataTypes) => {
    const socialMedia = sequelize.define('socialMedia', {
        Id: {
            primaryKey: true
        },
        Github: {
            type: DataTypes.STRING,
            validate: {
                isURL: true,
                len: [0,  50]
            }
        },
        LinkedIn: {
            type: DataTypes.STRING,
            validate: {
                isURL: true,
                len: [0, 50]
            }
        },
        CodePen: {
            type: DataTypes.STRING,
            validate: {
                isURL: true,
                len: [0, 50]
            }
        },
        Portfolio: {
            type: DataTypes.STRING,
            validate: {
                isURL: true,
                len: [0, 50]
            }
        },
        Model: associate = (models) => {
            socialMedia.belongsTo(models.student)
        }
        //student_account_Id
    })
    return socialMedia;
}