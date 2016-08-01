(function(){

  'use strict';

  angular
    .module('ngClassifieds')
    .factory('classifiedsService',['$http',function($http){

      function getClassifieds(){
        return $http.get('js/classifieds.json');
      };

      return {
        getClassifieds: getClassifieds
      }

    }]);

})();
