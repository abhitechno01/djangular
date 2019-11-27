(function(){
			'use strict';
			angular.module('scrumboard.demo',[])
			.controller('ScrumboardController', ['$scope',ScrumboardController]);
			function ScrumboardController($scope){
				
				$scope.add = function(list, title){
					var card = {
						title:title
					};
					list.cards.push(card);
				}

				$scope.data = [
				{
					name:'Django demo',
					cards: [
						{
							title:'Create models'
						},
						{
							title:'Create view'
						},
						{
							title:'Migrate database'
						},
					]
				},
				{
					name: 'Angular demo',
					cards:[
						{
							title:'Write html'
						},
						{
							title:'Create controller'
						},
						{
							title:'Create directives'
						}
					]
				}
				];

				$scope.person = {
					'name': 'Joe',
					'age':35
				};
			}
		}());