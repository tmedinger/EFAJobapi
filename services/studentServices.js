const student = require('../models/student')


export default class StudentsService {
    constructor(){}

    findAllStudents(){
        return student.findAll({
            include: [{
                model: student
            }]
        })
    }
}

