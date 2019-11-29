(function(){
			'use strict';
			angular.module('scrumboard.demo',[])
			.controller('ScrumboardController', ['$scope','$http',ScrumboardController]);
			function ScrumboardController($scope, $http){
				
				$scope.add = function(list, title){
					var card = {
						list: list.id,
						title:title
					};
					$http.post('/scrumboard/cards/', card)
					.then(function(response){

					list.cards.push(card);
					},
					function(){
						alert('Could not create card');
					}
					);
				};

				$scope.login = function(){
					$http.post('/auth_api/login/',
						{username:'dev', password:'hello@123'});
				};
				$scope.data = [];
				
				$http.get('/scrumboard/lists/')
				.then(function(response){
					$scope.data =response.data;
				});

				
			}
		}());