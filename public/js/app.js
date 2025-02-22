var app = angular.module('app',['ui.router','ui.bootstrap',"pageslide-directive"])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('buyers', {
        url:'/buyers',
        templateUrl:'./views/buyers.html',
      })
      .state('sellers', {
        url: '/sellers',
        templateUrl:'./views/sellers.html',
      })
      .state('home', {
        url:'/',
        templateUrl:'./views/home.html',
      })
      .state('contact', {
        url:'/contact',
        templateUrl:'./views/contact.html'
      })
      .state('paul', {
        url:'/paul',
        templateUrl: './views/paul.html'
      })
      .state('resources', {
        url:'/resources',
        templateUrl: './views/resources.html'
      })

      $urlRouterProvider.otherwise('/');
})
