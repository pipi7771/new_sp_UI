(function() {
  var headerControllers = angular.module('headerController',[]);

  headerControllers.controller('navCollapseCtrl', function ($scope) {
    $scope.isCollapsed = true;
  });
  
  headerControllers.controller('cssController', function ($scope) {
    //$scope.bootstrap_css = 'css/bootstrap.css';
    //$scope.bootstrap_css = 'css/bootstrap.darkly.css';
    $scope.bootstrap_css = 'css/bootstrap.cerulean.css';
  });
  
})();