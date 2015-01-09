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
  
  
    
  app.directive("home", function() {
    
		console.log("sp-directives:home");
		return {
			restrict: 'E',
			templateUrl: 'home.html'
		};
	});
  app.directive("myCustomer", function() {
    
		console.log("sp-directives:myCustomer");
		return {
			restrict: 'E',
			templateUrl: 'customer.html'
		};
	});
  app.directive("proposal", function() {
    
		console.log("sp-directives:proposal");
		return {
			restrict: 'E',
			templateUrl: 'proposal.html'
		};
	});
  app.directive("caseStudy", function() {
    
		console.log("sp-directives:caseStudy");
		return {
			restrict: 'E',
			templateUrl: 'case_study.html'
		};
	});
  
  app.directive("productCateMedia", function() {
    
		console.log("sp-directives:productCategories");
		return {
			restrict: 'E',
			templateUrl: 'product_cate_media.html'
		};
	});
  
  
})();
