var directives = angular.module('cvDirectives');

directives.directive('languageSwitcher', [function() {
    return {
        templateUrl: '/views/languageSwitcher.html',
        replace: true,
        controller: ['$scope', '$translate', function($scope, $translate) {
            $scope.selectedLanguage = $translate.preferredLanguage();

            $scope.setLanguage = function(language) {
                $translate.use(language);
            };
        }]
    };
}]);
