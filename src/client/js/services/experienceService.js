var services = angular.module('cvServices');

services.service('experienceService', ['$http', '$q', function($http, $q) {
    this.getProjectItems = function() {
        return $q.when([{
            id: 'card-crash',
            timespan: {
                begin: '11/2015',
                end: '01/2016'
            },
            name: 'CardCrash',
            description: 'CARD_CRASH_DESCRIPTION',
            link: {
                url: 'https://github.com/gannimet/CardCrash',
                image: 'img/github.png'
            },
            image: 'img/card-crash-logo.png',
            technologies: ['Java', 'Design Patterns', 'Google Guava', 'Javadoc',
                'Git']
        }, {
            id: 'kiwigrid',
            timespan: {
                begin: '07/2015',
                end: '12/2015'
            },
            name: 'Kiwigrid GmbH',
            description: 'KIWIGRID_DESCRIPTION',
            image: 'img/kiwigrid-logo.svg',
            technologies: ['Javascript', 'Angular.js', 'jQuery', 'HTML 5',
                'Karma + Jasmine', 'npm', 'bower', 'Grunt', 'Git']
        }, {
            id: 'holdem-tight',
            timespan: {
                begin: '02/2015',
                end: 'PRESENT'
            },
            name: 'Hold\'em Tight',
            description: 'HOLDEM_TIGHT_DESCRIPTION',
            link: {
                url: 'https://github.com/gannimet/holdem-tight',
                image: 'img/github.png'
            },
            image: 'img/holdem-tight-logo.png',
            technologies: ['Javascript', 'Angular.js', 'jQuery', 'HTML 5',
                'CSS 3', 'node.js + Express', 'Karma + Jasmine', 'npm', 'bower',
                'Grunt', 'Git']
        }]);
    };
}]);
