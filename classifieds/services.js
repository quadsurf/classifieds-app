(function(){

  'use strict';

  angular
    .module('ngClassifieds')
    .factory('classifiedsService',['$http',function($http){

      function getClassifieds(){
        return $http.get('classifieds/classifieds.json');
      };

      return {
        getClassifieds: getClassifieds
      }

    }]);

})();
