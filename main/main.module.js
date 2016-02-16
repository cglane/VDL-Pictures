(function () {
  "use strict";

  var underscore = angular.module('underscore', []);
          underscore.factory('_', function() {
              return window._; //Underscore should be loaded on the page
          });
  var jquery = angular.module('jquery', []);
          jquery.factory('$', function() {
          return window.$; //Underscore should be loaded on the page
        });


  angular
    .module('main', [
      'ngRoute',
      'ui.router',
      'underscore',
      'jquery',
      'ngResource',

    ])

    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('landing', {
              url: '/',
              controller:'MainController',
              templateUrl: 'main/views/landing.html'
          })
          .state('pics', {
              url: '/pics',
              controller:'PicsController',
              templateUrl: 'pics/views/pics.html'
          })
          .state('contact', {
              url: '/contact',
              controller:'ContactController',
              templateUrl: 'contact/views/contact.html'
          })
    //
    //       // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
          .state('pics.expanded', {
            url: '/extended/:album/:typePic',
            controller:'PicsController',
            templateUrl: 'pics/views/expanded.html',
          })
          .state('pics.carousel', {
            url: '/carousel/:album/:startLocation',
            controller:'CarouselController',
            templateUrl: 'pics/views/carousel.html',
          })
    //
    // // nested list with just some random string data
    // .state('home.paragraph', {
    //     url: '/paragraph',
    //     controller:'MainController',
    //     templateUrl: 'main/views/viewCards.html'
    // })


  });





})();
