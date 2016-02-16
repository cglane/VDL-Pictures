
(function(){
"use strict";

angular
  .module('main')
  .controller('PicsController',function($interval,$scope,$state,$stateParams,$timeout,PicsService,$http){


  //..
    $scope.state = $state.current;
    $scope.params = $stateParams;
    //---------------- carousel--------//
    $scope.albums= ['StackpoleResidence','Meeting42','BaileyIsland','HagoodResidence'];
    // $('<img src= ../../albums/HagoodResidence/IMG_3304.jpg>').error(function(){
    //   console.log('error')
    // });
    $scope.albumObject = PicsService.getAlbums();
    $scope.album = $stateParams.album; //getting fooVal

    //changing state


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
      $scope.moveUp = function(){
        $scope.startLocation = $stateParams.startLocation;
        $scope.carouselPics = PicsService.getCarouselPics($scope.albumObject,$scope.album,$scope.startLocation);
        console.log('move-up')
        $('.main-div').css('margin-top','-500px');
      }
      $scope.moveDown = function(){
        $('.main-div').css('margin-top','0px');
        $state.go('pics');

      }
      $scope.showMenu= function(bool){
        if(bool){
          $scope.fadeCarousel = 'fade-half';
          $scope.showMenuClass = 'fade-in';

        }else{
          $scope.fadeCarousel = 'fade-whole';
          $scope.showMenuClass = 'fade-out';
        }
      }
      $scope.showContact = function(bool){
        if(bool)
        $('.contact-wrapper').css('top','50px');
        else{
          $('.contact-wrapper').css('top','-500px');
        }
      }


  });
})();
