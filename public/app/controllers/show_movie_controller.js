
FoorumApp.controller('ShowMovieController', function($scope, $routeParams, $location,$route, Api){
    $scope.newMessage={};
    Api.getMovie($routeParams.id).success(function(movie){
        console.log("latasi elokuvan sivun")
        $scope.movie = movie;
    });
    
    $scope.deleteMovie=function(){
        Api.deleteMovie($routeParams.id).success(function(movie){
            $location.path("/");
        });
       
    }
    
    $scope.addMessage=function(){
        Api.addMessage($scope.newMessage, $scope.movie.id).success(function(message){
            console.log("viesti "+message.title+"lisätty");
            $scope.movie.Messages.push(message);
            $scope.$digest();
             
        });
    }
});
