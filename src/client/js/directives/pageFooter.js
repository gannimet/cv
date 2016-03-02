var directives = angular.module('cvDirectives');

directives.directive('pageFooter', [function() {
    return {
        templateUrl: '/views/pageFooter.html',
        replace: true,
        controller: ['$scope', function($scope) {
            $scope.currentYear = new Date().getFullYear();
        }]
    };
}]);
