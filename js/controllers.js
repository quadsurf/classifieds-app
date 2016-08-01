

(function(){
'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', ['$scope','$http','$mdSidenav','$mdToast','classifiedsService',function($scope,$http,$mdSidenav,$mdToast,classifiedsService){

      let s = $scope;

      classifiedsService.getClassifieds().then(function(classifieds){
          s.classifieds = classifieds.data;
        });

      var contact = {
        name: 'Chrissy Pooh',
        phone: '800-555-1212',
        email: 'castro@gmail.com'
      }

      s.openSidebar = function(){
        $mdSidenav('left').open();
      };

      s.closeSidebar = function(){
        $mdSidenav('left').close();
      };

      s.saveClassified = function(classified){
        if (classified){
          classified.contact = contact;
          s.classifieds.push(classified);
          s.classified = {};
          s.closeSidebar();
          showToast('Classified Saved!');
        }
      };

      s.editClassified = function(classified){
        s.editing = true;
        s.openSidebar();
        s.classified = classified;
      };

      s.saveEdit = function(){
        s.editing = false;
        s.classified = {};
        s.closeSidebar();
        showToast('Classified Updated');
      };

      function showToast(message){

        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );

      };

    }]);

})();//ryan's way
