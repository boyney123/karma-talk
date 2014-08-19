describe('String Calculator ',function(){
	var controllerConstructor,scope;

	beforeEach(module('app'));

    beforeEach(inject(function($controller,$rootScope){
    	controllerConstructor = $controller;
    	scope = $rootScope.$new();
    }));

    it('add empty string returns 0',function(){
    	// arrange
        var controller = controllerConstructor('calculatorController',{ $scope : scope});
        
        // act
        var result = controller.add('');

        // assert
        expect(scope.result).toEqual(0);
    });

    it('add single number returns the number',function(){
		// arrange
        var controller = controllerConstructor('calculatorController',{ $scope : scope});
        
        // act
        var result = controller.add('1');

        // assert
        expect(scope.result).toEqual(1);
    });

     it('add comma delimited string returns a sum of the number',function(){
		// arrange
        var controller = controllerConstructor('calculatorController',{ $scope : scope});
        
        // act
        var result = controller.add('1,2');

        // assert
        expect(scope.result).toEqual(3);
    });
})