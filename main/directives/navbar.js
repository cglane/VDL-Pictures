(function () {
  "use strict";
  angular
    .module('main')
    .directive('navbarDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './main/directives/views/navbar.html',
        link: function (scope, element, attributes) {


        }
      };
    });

})();
