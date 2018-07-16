const JobType = (sequelize, DataTypes) => {
    return sequelize.define('jobType', {
       job_Type = DataTypes.ENUM('Full Time', 'Part Time', 'Contract', 'Internship', 'Collaborative', 'Volunteer')  
    })
}

JobType.Job = JobType.belongsTo(Job);

export default JobType;
