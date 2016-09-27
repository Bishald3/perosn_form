angular.module('personApp').controller('form_controller',['$scope', 'form_service',
                                                         
            function($scope, form_service){
                $scope.personList ="";
                $scope.$watch(function(){
                    return form_service.personList;},
                              function(newVal, oldVal){
                                if(oldVal != newVal){
                                    $scope.personList = newVal;
                                }
                }
                )}                                  
            ]);