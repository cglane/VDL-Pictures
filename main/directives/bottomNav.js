(function () {
  "use strict";
  angular
    .module('main')
    .directive('bottomNav', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './main/directives/views/bottomNav.html',
        link: function (scope, element, attributes) {


        }
      };
    });

})();
