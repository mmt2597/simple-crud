(function() { 
   'use srtict';

   angular
      .module('orderAppConfig', [])
      .config(function($routeProvider) {
         $routeProvider
            .when('/view-list', {
               templateUrl: 'partials/view-list.html',
               controller: 'viewListController'
            })
            .when('/add', {
               templateUrl: 'partials/add.html',
               controller: 'addController'
            })
            .when('/edit/:x', {
               templateUrl: 'partials/add.html',
               controller: 'editController'
            })
            .otherwise({ redirectTo: '/view-list' });
      });

})();