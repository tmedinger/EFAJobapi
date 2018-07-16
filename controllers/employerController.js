// The purpose of this class will be to create functions that query the database, rather than the routes doing that itself. The reasoning being that we want to create testable code, in order to do so we don't want to rely of mocking of http request to an endpoint to test.

// This should have an initial get function that retrieves all of the items from that db table

var db = require("../models/index").sequelize;
var employerModel = db.model("employer_model"); 
var modelOne = db.model("model_one");
var modelTwo = db.model("model_two");

class EmployerService {
    constructor(){ }

    getAllEmployers(){
        return employerModel.findAll({ include: [modelOne, modelTwo] })
    } 
}

module.exports = EmployerService;