(function () {
    var spControllers = angular.module('spControllers', ['spDirectives']);

    spControllers.controller('ProductListController', function () {
        // console.log(productList);
        this.products = productList;
    });


    spControllers.controller('PackageListController', function () {
        //console.log(packageList);
        this.packages = packageList;
        //this.packages = $http.get('/sp/packaglist.json?"');
    });


    var productList = [
        {name: 'ANNUAL CASHBACK ENDOWMENT21', code: '0314'},
        {name: 'LIFETIME INCOME', code: 'C04'},
        {name: 'ENDOWMENT PLAN 2013', code: 'END2013'},
        {name: 'ENDOWMENT CLASSIC', code: '0171'},
    ];

    var packageList = [
        {name: 'ANNUAL CASHBACK ENDOWMENT21ENDOWMENT21', code: '0314'},
        {name: 'LIFETIME INCOME', code: 'C04'},
        {name: 'ENDOWMENT PLAN 2013', code: 'END2013'},
        {name: 'ENDOWMENT CLASSIC', code: '0171'},
        {name: 'ANNUAL CASHBACK ENDOWMENT 21a', code: '0314'},
        {name: 'LIFETIME INCOMEa', code: 'C04'},
        {name: 'ENDOWMENT PLAN 2013a', code: 'END2013'},
        {name: 'ENDOWMENT CLASSICa', code: '0171'},
        {name: 'ANNUAL CASHBACK ENDOWMENT 21b', code: '0314'},
        {name: 'LIFETIME INCOMEb', code: 'C04'},
        {name: 'ENDOWMENT PLAN 2013b', code: 'END2013'},
        {name: 'ENDOWMENT CLASSICb', code: '0171'},
        {name: 'ANNUAL CASHBACK ENDOWMENT 21b', code: '0314'},
        {name: 'LIFETIME INCOMEb', code: 'C04'},
        {name: 'ENDOWMENT PLAN 2013b', code: 'END2013'},
        {name: 'ENDOWMENT CLASSICb', code: '0171'},
    ];


    spControllers.controller('ProspectController', ['$scope', function ($scope) {
        $scope.prospect = {
            firstName: '',
            lastName: '',
            gender: '',
            smoking: '',
            phIndi: '',
            birthday: '',
            age: '',
            occupation: ''
        };
        $scope.relatePhs = [{code: 1, desc: 'Self'}, {code: 2, desc: 'Child'}, {code: 3, desc: 'Spouse'}];
        $scope.occupations = [{code: 1, desc: 'Accountant'}];

        $scope.save = function () {
            alert('stuff logic in this block later'+$scope.prospect);
        }
    }]);

})();

