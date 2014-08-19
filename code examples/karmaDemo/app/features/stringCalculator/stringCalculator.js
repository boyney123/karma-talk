'use strict';
karmaDemo.app.controller('calculatorController',['$scope',function($scope){

    this.add = function(numberString){

        if(numberString == ''){
            $scope.result = 0;
            return;
        }

        if(this.isNumeric(numberString)){
        	$scope.result = parseInt(numberString);
        	return;
       }

       // must be comma delimted string
       var numbers = numberString.split(',');
		$scope.result=0;
		
      for(var i = 0; i < numbers.length; i++){
      		console.log(parseInt(numbers[i]),$scope.result);
			$scope.result += parseInt(numbers[i]) ;
       }
    }

    this.isNumeric =  function(numberString){
    		return !isNaN(parseFloat(numberString)) && isFinite(numberString);	
    }
}]);