// Controllers are special type of objects in Angular.
// To the controller we pass the objects we need. Scope
// is required and is used to link the controller with 
// view template. Any object, function or field you 
// define on the scope you can use directly in the view.
// We also pass our DinnerModel service so we have the access
// to the model.
dinnerAppModule.controller('dinnerPlannerPro.DishController', function($scope, $rootScope, DinnerModel) {

	$scope.currentDishId = 1;

	$scope.numberOfGuests = DinnerModel.getNumberOfGuests();

	//
	// Event Listener	
	//
	var showDishEventListener = $rootScope.$on('renderDishController', 
		function(event, dishId) { 
			$scope.showDish( dishId );
			console.log('triggered');
		}
	);


	$scope.showDish = function (dishId) {

		$scope.currentDishId = dishId;

		$scope.updateDisplay();

		//$("#DishControllerView").modal();
	};

	$scope.confirmDish = function() {
		DinnerModel.addDishToMenu( $scope.currentDishId );

		$rootScope.$emit('dishModelChanged');
		
		$("#DishControllerView").modal("hide");
	};

	$scope.updateDisplay = function () {
		$scope.numberOfGuests = DinnerModel.getNumberOfGuests();
		
		$scope.currentDish = DinnerModel.getDish( $scope.currentDishId );
		$scope.priceOfCurrentDish = DinnerModel.getPriceOfDish( $scope.currentDishId );
	};

});