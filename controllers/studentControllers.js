var router = require('express').Router();


    
router.put(`/api/studentaccount/:id`, function(req, res) {
    var data = req.params.id;
    var student = req.body.student
    
    student
        .update({ 
            first_name : student.first_name,
            last_name : student.last_name,
            email : student.email,
            password : student.password,
            resume : student.resume,
            social_media_id : student.social_media_id,
        },
        {where: {id: data}}
        ).then(
            function updateSuccess(updatedLog) {
                res.json({
                    student: student
                });            
            },
            function updateError(err){
                res.send(500, err.message);
            }
        )
});


return router.get(`/api/studentaccount/:id`, function(req, res) {
    var data = req.params.id;
    var userid = req.user.id;

    student
        .findOne({
            where: { id: data, owner: userid }
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});
