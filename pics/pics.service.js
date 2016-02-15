(function(){
  "use strict"
  angular
    .module('main')
    .factory('PicsService',function($resource,$http){
      var albumRange = {
        StackpoleResidence:[
          8452,
          8776
        ],
        Meeting42:[
          6725,
          6946
        ],
        BaileyIsland:[
          4937,
          5180
        ],
        HagoodResidence:[
          3199,
          3481
        ]
      }
      var getAlbums = function(){
        var albumObject = {StackpoleResidence:[],Meeting42:[],BaileyIsland:[],HagoodResidence:[]}
          _.each(albumRange,function(num,name){
            for (var i = 0; i < 10; i++) {
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
    };
  });
})();
