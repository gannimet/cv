var directives = angular.module('cvDirectives');

directives.directive('experienceItem', [function() {
    return {
        templateUrl: '/views/experienceItem.html',
        replace: true,
        scope: {
            projectItem: '='
        }
    };
}]);
