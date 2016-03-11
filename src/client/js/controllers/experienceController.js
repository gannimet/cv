var controllers = angular.module('cvControllers');

controllers.controller('experienceController',
    ['$scope', 'experienceService', function($scope, experienceService) {
        experienceService.getProjectItems().then(function(data) {
            $scope.projectItems = data;
        });

        experienceService.getActivityItems().then(function(data) {
            $scope.activityItems = data;
        });
    }]);
