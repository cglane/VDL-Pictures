
(function(){
"use strict";

angular
  .module('main')
  .controller('CarouselController',function($interval,$scope,$state,$stateParams,$routeParams,$timeout,CarouselService,$http){


  //..
  console.log($state)

    $scope.state = $state.current;
    $scope.params = $state;
    //---------------- carousel--------//
    $scope.albums= ['StackpoleResidence','Meeting42','BaileyIsland','HagoodResidence'];
    // $('<img src= ../../albums/HagoodResidence/IMG_3304.jpg>').error(function(){
    //   console.log('error')
    // });
    $scope.albumObject = CarouselService.getAlbums();
    $scope.album = $state.params.album; //getting fooVal
    $scope.startLocation = $state.params.startLocation;
    //populating pics
    $scope.carouselPics = CarouselService.getCarouselPics($scope.albumObject,$scope.album,$scope.startLocation);
    var carouselWidth = ($scope.carouselPics.length *700) + 'px';
    console.log('carouselWidth',carouselWidth )
    $('#carousel-short').css('width',carouselWidth);
      $scope.carouselMargin = {
        left:'400px'
      }
      var left = 400;
      var myIncement = 600;
      $scope.moveLeft = function(){
        left -= myIncement;
        $scope.carouselMargin = {
          left: left+'px',
        }
      }
      $scope.moveRight = function(){
        console.log(left,'left')
        left += myIncement;
        $scope.carouselMargin = {
          left: left+'px',
        }
      }





  });
})();
