var directives = angular.module('cvDirectives');

directives.directive('navigationMenu',
        ['$rootScope', '$location', function($rootScope, $location) {
    return {
        templateUrl: '/views/navigationMenu.html',
        replace: true,
        link: function(scope, element) {
            $('#collapsible-navbar').on('show.bs.collapse', function() {
                $('.nav-pills').addClass('nav-stacked');
            });

            $('#collapsible-navbar').on('hide.bs.collapse', function() {
                $('.nav-pills').removeClass('nav-stacked');
            });

            $rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
                var linkId = $location.path().substring(1) + 'Link';

                $('.nav a:not(#' + linkId + ')').removeClass('active');
                $('.nav a#' + linkId).addClass('active');
            });
        }
    };
}]);
