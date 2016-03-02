var controllers = angular.module('cvControllers');

controllers.controller('profileController',
    ['$scope', '$translate', function($scope, $translate) {
        var mailtoBasicURL = 'mailto:info@colimit.de';

        $translate('CONTACT_REQUEST').then(function(contactRequest) {
            $scope.mailtoURL = mailtoBasicURL + '?subject=' + contactRequest;
        }, function() {
            $scope.mailtoURL = mailtoBasicURL;
        });

        $scope.localeDateFormat = function() {
            var currentLanguage = $translate.use();

            if (currentLanguage.indexOf('de') > -1) {
                return 'dd.MM.yyyy';
            } else {
                return 'yyyy/MM/dd';
            }
        };
    }]);
