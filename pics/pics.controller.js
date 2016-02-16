
(function(){
"use strict";

angular
  .module('main')
  .controller('PicsController',function($interval,$scope,$state,$stateParams,$timeout,PicsService,$http){


  //..
    console.log($state)
    var typePic = $state.params.typePic;
    if(typePic === 'historic'){
      $scope.albums= ['Meeting42','HagoodResidence'];

    }else if(typePic === 'residential'){
      $scope.albums= ['StackpoleResidence','BaileyIsland'];

    }else if(typePic === 'commercial'){
      $scope.albums= [];

    }
    //---------------- carousel--------//
    // $scope.albums= ['StackpoleResidence','Meeting42','BaileyIsland','HagoodResidence'];
    $scope.albumObject = PicsService.getAlbums();
    $scope.album = $stateParams.album; //getting fooVal

    //changing state


      $scope.moveUp = function(index){
        console.log('move-up')
        $('.main-div').css('margin-top','-500px');
        $state.go('pics.carousel',{album: $scope.album,startLocation:index});
      }
      $scope.moveDown = function(){
        $scope.albums= ['StackpoleResidence','Meeting42','BaileyIsland','HagoodResidence'];
        $('.main-div').css('margin-top','0px');
        $state.go('pics');

      }
      $scope.showMenu= function(bool){
        if(bool){
          $scope.fadeCarousel = 'fade-half';
          $scope.showMenuClass = 'fade-in';
          $('.menu-directive').css('left','535px')
        }else{
          $scope.fadeCarousel = 'fade-whole';
          $scope.showMenuClass = 'fade-out';
          $('.menu-directive').css('left','-500px')

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
