var services = angular.module('cvServices');

services.service('experienceService', ['$http', '$q', function($http, $q) {
    this.getProjectItems = function() {
        return $q.when([{
            id: 'kiwigrid',
            timespan: {
                begin: '07/2015',
                end: '12/2015'
            },
            name: 'Kiwigrid GmbH',
            description: 'Für die Kiwigrid GmbH arbeitete ich an der Konzeption und Umsetzung von Komponenten für das „Solarwatt-Energy-Portal”, eine Angular.js-App mit Schnittstellen für die Energie-Manager der Firma Solarwatt. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?',
            image: 'img/kiwigrid-logo.svg'
        }, {
            id: 'card-crash',
            timespan: {
                begin: '11/2015',
                end: '01/2016'
            },
            name: 'CardCrash',
            description: 'CardCrash is a poker hand evaluation library written in Java. Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht?',
            url: 'https://github.com/gannimet/CardCrash',
            image: 'img/card-crash-logo.png'
        }]);
    };
}]);
