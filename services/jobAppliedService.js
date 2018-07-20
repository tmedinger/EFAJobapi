var sequelize = require('../db');
const applied = sequelize.import('../models/jobApplied');

class JobsAppliedService{
constructor(){}

getOneApplied = function(id){
    return applied.findAll({ 
        where:{
        id = req.params.id
    }})
}
 
deleteApplied = function(id){
    return applied.destroy({
        where:{id:req.student.id},
        paranoid: true
    })
}} 
    




module.exports = JobsAppliedService;


    