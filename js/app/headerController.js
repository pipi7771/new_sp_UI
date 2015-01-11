(function() {
  var headerControllers = angular.module('headerController',[]);

  headerControllers.controller('navCollapseCtrl', function ($scope) {
    $scope.isCollapsed = true;
  });
  
  headerControllers.controller('cssController', function ($scope) {
    //$scope.stylesheet_href = 'css/bootstrap.css';
    $scope.stylesheet_href = 'css/bootstrap.darkly.css';
    //$scope.stylesheet_href = 'css/bootstrap.cerulean.css';
  });
  
})();

