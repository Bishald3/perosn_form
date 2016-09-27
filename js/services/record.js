angular.module('personApp').service('form_service',['$http', function($http){
    
    this.personList ="";
    var obj = this;
    
    $http.get("/service/person").then(function(response){
        console.log("logging for the personlist");
        
        obj.personList = response.data;
        console.log(obj.personList);
    })
    
    
}]);