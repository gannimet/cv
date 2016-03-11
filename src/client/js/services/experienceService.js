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
            technologies: ['Java', 'Design&nbsp;Patterns', 'Google&nbsp;Guava',
                'Javadoc', 'Git']
        }, {
            id: 'kiwigrid',
            timespan: {
                begin: '07/2015',
                end: '12/2015'
            },
            name: 'Kiwigrid GmbH',
            description: 'KIWIGRID_DESCRIPTION',
            image: 'img/kiwigrid-logo.svg',
            technologies: ['Javascript', 'Angular.js', 'jQuery', 'HTML&nbsp;5',
                'Karma&nbsp;+&nbsp;Jasmine', 'npm', 'bower', 'Grunt', 'Git']
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
            technologies: ['Javascript', 'Angular.js', 'jQuery', 'HTML&nbsp;5',
                'Jade', 'CSS&nbsp;3', 'node.js&nbsp;+&nbsp;Express',
                'Karma&nbsp;+&nbsp;Jasmine', 'npm', 'bower', 'Grunt', 'Git']
        }, {
            id: 'scriptex',
            timespan: {
                begin: '02/2014',
                end: '03/2014'
            },
            name: 'scriptex',
            description: 'SCRIPTEX_DESCRIPTION',
            link: {
                url: 'https://github.com/gannimet/scriptex',
                image: 'img/github.png'
            },
            image: 'img/scriptex.png',
            technologies: ['Javascript', 'node.js', 'mocha', 'should.js',
                'LaTeX', 'Git']
        }, {
            id: 'tetrix',
            timespan: {
                begin: '07/2012',
                end: '10/2012'
            },
            name: 'Tetrix',
            description: 'TETRIX_DESCRIPTION',
            link: {
                url: 'https://github.com/gannimet/Tetrix',
                image: 'img/github.png'
            },
            image: 'img/tetrix.png',
            technologies: ['Java', 'Design&nbsp;Patterns', 'Android', 'JUnit', 'SVN']
        }]);
    };

    this.getActivityItems = function() {
        return $q.when([{
            id: 'university',
            timespan: {
                begin: '04/2014',
                end: '09/2014'
            },
            name: 'UNIVERSITY_NAME',
            description: 'UNIVERSITY_DESCRIPTION',
            image: 'img/tu-logo.png'
        }, {
            id: 'fraunhofer',
            timespan: {
                begin: '03/2013',
                end: '12/2014'
            },
            name: 'FRAUNHOFER_NAME',
            description: 'FRAUNHOFER_DESCRIPTION',
            image: 'img/fraunhofer.gif'
        }, {
            id: 'tutoring',
            timespan: {
                begin: '10/2010',
                end: 'PRESENT'
            },
            name: 'TUTORING_NAME',
            description: 'TUTORING_DESCRIPTION',
            image: 'img/tutoring.jpg'
        }]);
    };
}]);
