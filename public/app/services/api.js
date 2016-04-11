
FoorumApp.service('Api', function($http){
  // Aihealueiden Api-funktiot
  this.getMovies = function(){
    return $http.get("/movies");
  }
  this.getMovie = function(id){
    return $http.get("/movies/"+id);
  }
  this.getMovieInfo=function(movie){
    return $.getJSON("http://www.omdbapi.com/?t="+movie.name+"&y="+(movie.year!==undefined ? movie.year : "")+"&plot=short&r=json", 
    function(data) {
        movie.name=data["Name"]
        movie.year=data["Year"];
        movie.description=data["Plot"];
        movie.director=data["Director"];
        movie.writer=data["Writer"];
        movie.actors=data["Actors"];
    });
  }
  this.addMovie = function(movie){
        console.log("apissa mennään");
        return $http.post("/movies",movie);
   }
  
  this.deleteMovie = function(id){
    return $http.delete("/movies/"+id);
  }

  // Viestien Api-funktiot
  this.getMessages = function(movieId){
      return $http.get("/movies/"+movieId+"/messages")
  }
  this.addMessage = function(message, movieId){
      return $http.post("/movies/"+movieId+"/messages",message);
    // Lisää annettu viesti lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics/:topicId/message
  }

  // Vastausten Api-funktiot
  this.addReply = function(reply, messageId){
    // Lisää annettu vastaus lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /messages/:messageId/reply
  }

  // Käyttäjän Api-funktiot
  this.login = function(user){
    // Tarkista käyttäjän kirjautuminen lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users/authenticate
  }
  this.register = function(user){
    // Lisää annettu käyttäjä lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users
  }
  this.getUserLoggedIn = function(){
    // Hae kirjautunut käyttäjä toteuttamasi Api:n polusta /users/logged-in
  }
  this.logout = function(){
    return $http.get('/users/logout');
  }
});
