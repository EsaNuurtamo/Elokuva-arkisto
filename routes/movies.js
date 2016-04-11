var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /movies

// GET /movies
router.get('/', function(req, res, next) {
    Models["Movie"].findAll().then(function(topics){
        res.json(topics);
        alert(topics);
        res.send(200);
    });
    
    
});

// GET /movies/:id
router.get('/:id', function(req, res, next) {
    Models["Movie"].findOne({
        where:{id:req.params.id},
        include:{model:Models["Message"]}
    }).then(function(movie){
          res.json(movie);
          console.log(movie.name+" haettu");
          res.send(200);
    });
  
});
// DELETE /movies/:id
router.delete('/:id', function(req, res, next) {
  Models["Movie"].findOne(req.params.id).then(function(movie){
        res.json(movie);
        movie.destroy({force:true});
        res.send(200);
    });
  
});



// POST /movies
router.post('/', function(req, res, next) {
    // Lisää tämä aihealue
    console.log("postissa ollaan");
    var movie = req.body;

    Models["Movie"].create({
        name: movie.name,
        description: movie.description,
        year: movie.year,
        director: movie.director,
        writer:movie.writer,
        actors:movie.actors
    }).then(function(movie){
      console.log(movie.name + ' on lisätty tietokantaan onnistuneesti!');
      res.json(movie);
      res.send(200);
    });
});



// POST /movies/:id/messages
router.post('/:id/messages', function(req, res, next) {
    var message=req.body;
    var movieId = req.params.id;
    Models["Message"].create({
        title: message.title,
        content: message.content,
        MovieId:movieId
    }).then(function(message){
      console.log(message.title + 'viesti on lisätty tietokantaan onnistuneesti!');
      res.json(message);
      res.send(200);
    });
});

module.exports = router;
