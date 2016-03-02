var app = angular.module('cvApp', [
    'ngRoute',
    'pascalprecht.translate',
    'cvControllers',
    'cvServices',
    'cvDirectives',
    'cvFilters'
]);

app.config(
    ['$routeProvider', '$locationProvider', '$translateProvider',
    function($routeProvider, $locationProvider, $translateProvider) {
        $routeProvider
            .when('/experience', {
                templateUrl: '/views/experience.html',
                controller: 'experienceController'
            })
            .when('/profile', {
                templateUrl: '/views/profile.html',
                controller: 'profileController'
            })
            .when('/contact', {
                templateUrl: '/views/contact.html',
                controller: 'contactController'
            })
            .otherwise({
                redirectTo: '/profile'
            });

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $translateProvider
            .useSanitizeValueStrategy('escape')
            .registerAvailableLanguageKeys(['en', 'de'], {
                'en_*': 'en',
                'de_*': 'de'
            })
            .determinePreferredLanguage();
        $locationProvider.html5Mode(true);
    }]);
