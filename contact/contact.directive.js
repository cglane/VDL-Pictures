(function () {
  "use strict";
  angular
    .module('main')
    .directive('contactDirective', function () {
      return {
        restrict: 'EA',
        transclue: true,
        templateUrl: './contact/views/contact.html',
        link: function (scope, element, attributes) {


        }
      };
    });

})();
