(function() {
  var spControllers = angular.module('spControllers', ['spDirectives']);

  spControllers.controller('ProductListController', function(){
   // console.log(productList);
    this.products = productList;
  });

  
  spControllers.controller('PackageListController', function(){
    //console.log(packageList);
    this.packages = packageList;
  });
  
  


  var productList = [
    { name: 'ANNUAL CASHBACK ENDOWMENT21', code: '0314'},
    { name: 'LIFETIME INCOME', code: 'C04'},
    { name: 'ENDOWMENT PLAN 2013', code: 'END2013'},
    { name: 'ENDOWMENT CLASSIC', code: '0171'},
    { name: 'ANNUAL CASHBACK ENDOWMENT 21a', code: '0314'},
    { name: 'LIFETIME INCOMEa', code: 'C04'},
    { name: 'ENDOWMENT PLAN 2013a', code: 'END2013'},
    { name: 'ENDOWMENT CLASSICa', code: '0171'},
    { name: 'ANNUAL CASHBACK ENDOWMENT 21b', code: '0314'},
    { name: 'LIFETIME INCOMEb', code: 'C04'},
    { name: 'ENDOWMENT PLAN 2013b', code: 'END2013'},
    { name: 'ENDOWMENT CLASSICb', code: '0171'},
  ];
  
  var packageList = [
    { name: 'ANNUAL CASHBACK ENDOWMENT21ENDOWMENT21', code: '0314'},
    { name: 'LIFETIME INCOME', code: 'C04'},
    { name: 'ENDOWMENT PLAN 2013', code: 'END2013'},
    { name: 'ENDOWMENT CLASSIC', code: '0171'},
    { name: 'ANNUAL CASHBACK ENDOWMENT 21a', code: '0314'},
    { name: 'LIFETIME INCOMEa', code: 'C04'},
    { name: 'ENDOWMENT PLAN 2013a', code: 'END2013'},
    { name: 'ENDOWMENT CLASSICa', code: '0171'},
    { name: 'ANNUAL CASHBACK ENDOWMENT 21b', code: '0314'},
    { name: 'LIFETIME INCOMEb', code: 'C04'},
    { name: 'ENDOWMENT PLAN 2013b', code: 'END2013'},
    { name: 'ENDOWMENT CLASSICb', code: '0171'},
    { name: 'ANNUAL CASHBACK ENDOWMENT 21b', code: '0314'},
    { name: 'LIFETIME INCOMEb', code: 'C04'},
    { name: 'ENDOWMENT PLAN 2013b', code: 'END2013'},
    { name: 'ENDOWMENT CLASSICb', code: '0171'},
  ];
  
  
})();

