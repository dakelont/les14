'use strict';
angular.module('myMenu', [])
.controller('myMenuCtrl', function ($scope, $location) {
    $scope.menu = [
		{
			'id':'view1',
			'name':'view1'
		},
		{
			'id':'view2',
			'name':'view2'
		},
		{
			'id':'myaccount',
			'name':'myaccount'
		}
	];
	
	$scope.isActive = function(location) {
		return '/' + location === $location.path()
	}

});