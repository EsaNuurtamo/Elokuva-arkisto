
FoorumApp.controller('MoviesListController', function($scope, $location, Api){
    $scope.newMovie={};
    Api.getMovies().success(function(movies){
      $scope.movies = movies;
      $scope.count=movies.length;
    });
    
    $scope.getMovieInfo=function(){
        //hakee elokuvan tiedot netistä ja lisää ne olioon
        Api.getMovieInfo($scope.newMovie).success(function(){
            console.log("haettuTiedot");
            $scope.$digest();
        });
        
    }
    
    $scope.addMovie=function(){
        console.log("aloitettu lisääminen");
        for(var obj in $scope.newMovie){
            console.log($scope.newMovie[obj]);
        }
        Api.addMovie($scope.newMovie).success(function(movie){
               $location.path("/movies/"+movie.id);//kun valmis niin mennään elokuvan omalle sivu
        }); 
    };
});
