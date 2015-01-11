(function () {

	var app = angular.module('spDirectives', []);
  
  
	app.directive("spHeaderNav", function() {
    
		console.log("sp-directives:spHeaderNav");
		return {
			restrict: 'E',
			templateUrl: 'header_nav.html'
		};
	});
 
 	app.directive("spFooterNav", function() {
    
		console.log("sp-directives:spFooterNav");
		return {
			restrict: 'E',
			templateUrl: 'footer_nav.html'
		};
	});
  
  
  
  app.directive("productCateMedia", function() {
    
		console.log("sp-directives:productCategories");
		return {
			restrict: 'E',
			templateUrl: 'home/product_cate_media.html'
		};
	});
  
  
})();
