(function () {
  "use strict";
  angular
    .module('main')
    .directive('profileDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './main/directives/views/profile.directive.html',
        link: function (scope, element, attributes) {


        }
      };
    });

})();
