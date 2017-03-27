var myApp = angular.module("app", []);

myApp.controller("cardsController", ['$scope', function($scope) {
	$scope.programmers = [{
					name: 'Misael',
					description: 'Drupal Developer, Web Developer, PHP',
					hourly: 22,
					location: 'Russia',
					success: '96%',
					tags: ['CakePHP', 'PHP', 'HTML', 'Twilio API', 'API Development'],
					img: 'toast.png'
				 },{
					name: 'James',
					description: 'Drupal Developer, Web Developer, PHP',
					hourly: 22,
					location: 'Russia',
					success: '96%',
					tags: ['CakePHP', 'PHP', 'HTML', 'Twilio API', 'API Development'],
					img: 'launch.png'
				 },{
					name: 'Aykut',
					description: 'Drupal Developer, Web Developer, PHP',
					hourly: 22,
					location: 'Russia',
					success: '96%',
					tags: ['CakePHP', 'PHP', 'HTML', 'Twilio API', 'API Development'],
					img: 'hamnurger.png'
				 },{
					name: 'Suzy',
					description: 'Drupal Developer, Web Developer, PHP',
					hourly: 22,
					location: 'Russia',
					success: '96%',
					tags: ['CakePHP', 'PHP', 'HTML', 'Twilio API', 'API Development'],
					img: 'dinner.png'
				 },{
					name: 'Marry',
					description: 'Drupal Developer, Web Developer, PHP',
					hourly: 22,
					location: 'Russia',
					success: '96%',
					tags: ['CakePHP', 'PHP', 'HTML', 'Twilio API', 'API Development'],
					img: 'coffe.png'
			}];

	$scope.firstCard = Math.floor(Math.random() * 5);
	$scope.programmer = $scope.programmers[$scope.firstCard];
	$scope.nextProgramer = $scope.programmers[$scope.firstCard<4? $scope.firstCard + 1:0];

	$scope.next = function() {
		
	}
}]);

myApp.directive("myCards", function() {
	return {
		restrict: 'E',
		link: function(scope, element, attributes) {

			// VARIABLES
			var realStart = $('#draggable').position().left;
			var paddingleft = +($('body').css('padding-left').replace(/[^\d.]/g, ''));
			// RESET FUNCTION
			var restart = function() {
				setTimeout(function() {
					$('#draggable').css("transform", "");
					$('#draggable').css("animation", "");
					$('#draggable').css('margin-left', 'auto');
					$('#draggable').css('transition', '');
					$('#draggable').css({'top': '', 'margin-left': '', 'left': '', 'height': '1400px', 'width': '84%'});
				}, 450);			
				clearTimeout();
			};
			var goBack = function() {
				setTimeout(function() {
					scope.next();
					$('#draggable').css("transform", "");
					$('#draggable').css({'top': '180px', 'margin-left': '11px', 'left': '62px', 'height': '1350px', 'width': '81%'});
					$('#draggable').css('animation', 'goBack 350ms ease-in-out forwards');
				}, 150);
			};
			var notLeaving = function() {
				$('#draggable').css('transition', 'all 450ms ease-in-out forwards');
				$('#draggable').css('transform', '');
			};	
			// TOUCH STARTED
			$('#draggable').on('touchstart', function(event) {
				this.startPosition = event.targetTouches[0].pageX;
				this.lastPosition = $(this).position().left;
			});
			// DURING THE TOUCH MOVIMENT
			$('#draggable').on('touchmove', function(event) {
				this.value = (event.targetTouches[0].pageX - this.startPosition)  + (this.lastPosition | 0);
				$('#draggable').css("transform", "translateX("+this.value+"px)");
			});
			// TOUCH RELEASED
			$('#draggable').on('touchend', function(event) {
				var position = $('#draggable').position().left;
				var newPosition = $('#draggable').position().left - realStart;
				if(position > 250 || position < -180) {
					if(position > 0) {
						$('#draggable').css('margin-left', newPosition);
						$('#draggable').css('animation', 'swipeRight 300ms ease-in-out forwards');
						goBack();
					} else {
						$('#draggable').css('margin-left', newPosition);
						$('#draggable').css('animation', 'swipeLeft 300ms ease-in-out forwards');
						goBack();
					}
					restart(); 		
				}	else if(-200 >= position <= 250) {
					notLeaving();	
					restart();
				}			
			});
		}
	}
});



