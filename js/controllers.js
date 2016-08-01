

(function(){
'use strict';

  angular
    .module('ngClassifieds')
    .controller('classifiedsCtrl', ['$scope','$http','$mdSidenav','$mdToast','$mdDialog','classifiedsService',function($scope,$http,$mdSidenav,$mdToast,$mdDialog,classifiedsService){

      let s = $scope;

      classifiedsService.getClassifieds().then(function(classifieds){
          s.classifieds = classifieds.data;
        });

      var contact = {
        name: 'Chrissy Pooh',
        phone: '800-555-1212',
        email: 'castro@gmail.com'
      }

      s.categories = [];

      for (var i = 0; i < s.classifieds.length; i++) {
        for (var j = 0; i < s.classifieds[i].categories.length; i++) {
          s.categories.push(s.classifieds[i].categories[j]);
        }
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

      s.deleteClassified = function(event, classified){

        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete ' + classified.title + '?')
          .ok('Yes')
          .cancel('No')
          .targetEvent(event);

        $mdDialog.show(confirm)
          .then(function(){
            var index = s.classifieds.indexOf(classified);
            s.classifieds.splice(index,1);
          }, function(){});
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
