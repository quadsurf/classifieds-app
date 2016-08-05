(function(){

  'use strict';

  angular
    .module('classifiedsApp')
    .service('classifiedsService',['$http',function($http){

      function getClassifieds(){
        return $http.get('classifieds/classifieds.json');
      };

      return {
        getClassifieds: getClassifieds
      }

    }]);

})();
