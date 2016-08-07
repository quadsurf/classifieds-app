(function(){

  'use strict';

  angular
    .module('classifiedsApp')
    .service('classifiedsService',['$http','$firebaseArray',function($http,$firebaseArray){

      // var ref = firebase.database().ref();
      // $scope.classdb = $firebaseArray(ref);

      var ref = new Firebase('https://classifiedsapp-f2e49.firebaseio.com/');

      return {
        ref: $firebaseArray(ref)
      }

      // function getClassifieds(){
      //   return $http.get('classifieds/classifieds.json');
      // };

      // return {
      //   getClassifieds: getClassifieds
      // }

    }]);

})();
