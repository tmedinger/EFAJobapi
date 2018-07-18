const db = require('../models/index').sequelize;
const student = require('../models/socialmedia');
var router = require('express').Router();

export default class SocialMediaService {
    constructor(){}

    getAllSocialMedia(){
        return social_media.findAll({
            include: [{
                model: social_media
            }]
        })
    }
    getSocialMediaById(social_MediaId){
        let id = social_MediaId;
        return router.get(`/api/updatesocialmedia/${id}`, function(req, res) {
            var data = req.params.id;
            var userid = req.user.id;
        
            social_media
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
    }
    putSocialMediaById(social_MediaId){
        let id = social_MediaId;
        return router.put(`/api/updatesocialmedia/:${id}`, function(req, res) {
            var data = req.params.id;
            var social_media = req.body.social_media
            
            social_media
                .update({ 
                    Github : req.body.social_media.Github,
                    LinkedIn : req.body.social_media.LinkedIn,
                    CodePen : req.body.social_media.CodePen,
                    Porfolio: req.body.social_media.Portfolio,
                    student_account_Id : req.body.social_media.resume,
                    social_media_id : req.body.social_media.student_account_id,
                },
                {where: {id: data}}
                ).then(
                    function updateSuccess(updatedLog) {
                        res.json({
                            social_media: social_media
                        });            
                    },
                    function updateError(err){
                        res.send(500, err.message);
                    }
                )
        });
    }
    postSocialMedia(){
    return router.post('/createsocialmedia', (req, res) => {
        var social_media = req.body.social_media
        social_media.create({
            Github : req.body.social_media.Github,
            LinkedIn : req.body.social_media.LinkedIn,
            CodePen : req.body.social_media.CodePen,
            Porfolio: req.body.social_media.Portfolio,
            student_account_Id : req.body.social_media.resume,
            social_media_id : req.body.social_media.student_account_id,
         })
         .then(social_media => res.status(200).json(social_media))
         .catch(err => res.status(500).json({error: err.errors[0].message}))

        }) 
    }
    deleteSocialMedia(){
    return router.delete(`/deletesocialmedia/:${id}`, function(req, res) {
        let id = social_MediaId;
        social_media
            .destroy({ 
                where: { id: id } 
            }).then(
                function deleteLogSuccess(social_mediaDelete){ 
                    res.send("you removed a log");
                },
                function deleteLogError(err){ 
                    res.send(500, err.message);
                }
            );
        });
    }
}
