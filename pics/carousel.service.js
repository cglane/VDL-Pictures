(function(){
  "use strict"
  angular
    .module('main')
    .factory('CarouselService',function($resource,$http){
      var albumRange = {
        StackpoleResidence:[
          8452,
          8466
        ],
        Meeting42:[
          6725,
          6748
        ],
        BaileyIsland:[
          4937,
          4957
        ],
        HagoodResidence:[
          3199,
          3221
        ]
      }
      var getAlbums = function(){
        console.log('getAlbum');
        var albumObject = {StackpoleResidence:[],Meeting42:[],BaileyIsland:[],HagoodResidence:[]}
          _.each(albumRange,function(num,name){
            for (var i = 0; i < 13; i++) {
              var randomNum = Math.floor(Math.random() * (num[1] - num[0] + 1)) + num[0];
              var currPic = 'IMG_'+randomNum+'.jpg'
              if(!_.contains(albumObject[name],currPic)){
                // checkPics(albumObject,name,currPic)
                albumObject[name].push(currPic);
              }
            }
          })
          return albumObject;
      }
      var getCarouselPics = function(albumObject,album,startLocation){
        var firstPic = albumObject[album][startLocation]
        var carouselPics = [];
        carouselPics.push(firstPic);//starting location for carousel
            _.each(albumObject[album],function(el){
                if(el != firstPic){
                    carouselPics.push(el);
                  }
              });
              return carouselPics;
      };
      var checkPics = function(albumObject,name,pic){
            $http({
              method: 'GET',
              url: 'albums/'+name+'/'+pic
            }).then(function successCallback(response) {
              albumObject[name].push(pic)
              console.log('success')
              // this callback will be called asynchronously
              // when the response is available
            }, function errorCallback(response) {
              console.log('failure')
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        }
    return{
      getAlbums:getAlbums,
      getCarouselPics:getCarouselPics,
    };
  });
})();
