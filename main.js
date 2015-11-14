var app = angular.module("myApp", []);

app.controller("myController", ['$scope', function ($scope) {
  $scope.val = 0;
}]);

app.directive("withoutScope", function() {
  return{
    scope: false,
    link: function (scope, elem, attrs, ctrl) {
      scope.val = 20;
    }
  };
});

app.directive("withScope", function() {
  return{
    scope: true,
    link: function (scope, elem, attrs, ctrl) {
      scope.val = 25;
    }
  };
});

app.directive("newScope", function(){
  return{
    scope:{val:'@'},
    link:function(scope, elem, attrs, ctrl){
      scope.val = 30;
    }
  };
});