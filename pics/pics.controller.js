
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
    //changing state
    $scope.album = $stateParams.album; //getting fooVal
    $scope.startLocation = $stateParams.startLocation;
    var myIncement = 600;
    var startLocation = $scope.startLocation;
    $scope.carouselPics = [];
      $scope.getCarouselPics = function(){
        $scope.album = $stateParams.album; //getting fooVal
        console.log('getCarouselPics')
        var firstPic = $scope.albumObject[$scope.album][$scope.startLocation]
        $scope.carouselPics.push(firstPic);//starting location for carousel
        _.each($scope.albumObject[$scope.album],function(el){
          if(el != firstPic){
            $scope.carouselPics.push(el);
          }
          // var currWidth = 800 * $scope.carouselPics.length+1;//set width of carousel
          // $('#carousel-short').css('width',currWidth)
        });
        console.log('getCarouselPics',$scope.carouselPics);
        var calcWidth = 6000;
        console.log(calcWidth,'calcWidth')
        $('#carousel-short').css('width',calcWidth + 'px')

      };
      $scope.carouselMargin = {
        left:'400px'
      }
      var left = 400;
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
