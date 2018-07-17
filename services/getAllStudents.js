const student = require('../models/student')


export default class FindAllStudentsService {
    constructor(){}

    getAll(){
        return student.findAll({
            include: [{
                model: student
            }]
        })
    }
}