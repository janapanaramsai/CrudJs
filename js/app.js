var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope) {
	// body...
	console.log("In myController...");

	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = "";

	$scope.users = [
		{Firstname: "ram", Lastname: "sai", DOB: "22-02-1994", zipcode: "77494"},
		{Firstname: "ram", Lastname: "sai", DOB: "22-02-1994", zipcode: "77494"},
		{Firstname: "ram", Lastname: "sai", DOB: "22-02-1994", zipcode: "77494"}
	]

	$scope.addPerson = function () {
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New person added";
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(){
		$scope.message = "edited!!";
	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.message = "person deleted";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});