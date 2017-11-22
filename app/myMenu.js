'use strict';
angular
	.module('myApp')
	.controller('myMenuCtrl', function () {
		var vm = this;
		vm.menu = [
			{
				'id':'list',
				'name':'Список'
			},
			{
				'id':'createNewPokemon',
				'name':'Добавить нового'
			},
			{
				'id':'myaccount',
				'name':'myaccount'
			}
		];
	});