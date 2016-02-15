(function(){
"use strict";

angular
  .module('main')
  .controller('MainController',function($interval,$scope,$state,$timeout){
    //showing text function
    var showText = function (target, message, index, intervals) {
      if (index < message.length) {
        if(index <=0){
          $(target).append("<span class = 'append'></span>");
        }
        $(target).find('.append').append(message[index++]);
          setTimeout(function () { showText(target, message, index, intervals); }, intervals);
        }
      }
      $scope.consoleLog = function(){
        console.log('scroll')
      }
    //background picture animation
    var landingPics = ['show1','show2','show3','show4','show5']
    var currPic = 1;
    $scope[landingPics[0]] = 'fade-in';

    $timeout(function(){$scope[landingPics[0]]='fade-out'},4500)
    $interval(function(){
      $scope[landingPics[currPic]] = 'fade-in';
      $timeout(function(){ $scope[landingPics[currPic]] = 'fade-out';
      (currPic < landingPics.length-1)? currPic++ : currPic = 0;}
      ,4500);

    },5000)
    //awards information
    // $('.landing-pics').addClass("slide-out");
    // $(".landing-pics").css('display','none');
    // $('.landing-pics').addClass("slide-out");
    $scope.toInformationPage  = function(bool){
      if(bool){
        $('.landing-pics').removeClass('slide-in');
        $('.landing-pics').addClass('slide-out');
      }else{
        $('.landing-pics').removeClass('slide-out');
        $('.landing-pics').addClass('slide-in');
      }
    }

    //contact information

    $scope.showContact = function(bool){
      if(bool)
      $('.contact-wrapper').css('top','50px');
      else{
        $('.contact-wrapper').css('top','-500px');
      }
    }

    //profile things
    $scope.showProfileContent = function(bool){
      if(bool){
        $(".content-banner").css('height','auto');
        $('.profile-directive').css('top','-600px');
        $('.expanded-profile').css('opacity','1')
      }else{
        $(".content-banner").css('height','100px');
        $('.profile-directive').css('top','0px');
        $('.expanded-profile').css('opacity','0')

      }
    }
  });
})();
