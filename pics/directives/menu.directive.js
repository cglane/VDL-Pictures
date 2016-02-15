(function () {
  "use strict";
  angular
    .module('main')
    .directive('menuView', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './pics/directives/views/menu.directive.html',
        link: function (scope, element, attributes) {


        }
      };
    });

})();
