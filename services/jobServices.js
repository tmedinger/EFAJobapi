var sequelize = require('../db');
const job = sequelize.import('../models/job')

exports.getAll() = function() {
    return job.findAll({

    })
}