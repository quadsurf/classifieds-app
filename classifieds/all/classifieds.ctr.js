

(function(){
'use strict';

  angular
    .module('classifiedsApp')
    .controller('allClassifiedsCtr',
            ['$scope','$state','$http','$mdSidenav','$mdToast','$mdDialog','classifiedsService',
      function($scope,$state,$http,$mdSidenav,$mdToast,$mdDialog,classifiedsService){

      let t = this;
      let s = $scope;

      //functions
      t.closeSidebar = closeSidebar;
      t.deleteClassified = deleteClassified;
      t.editClassified = editClassified;
      t.openSidebar = openSidebar;

      //vars
      t.categories;
      t.classified;
      t.classifieds;
      t.editing;

      classifiedsService.getClassifieds()
        .then(function(classifieds){
          t.classifieds = classifieds.data;
          t.categories = getCategories(t.classifieds);
        });

      s.$on('newClassified',function(event,classified){
        classified.id = t.classifieds.length + 1;
        t.classifieds.push(classified);
        showToast('Classified Saved!');
      });

      function openSidebar(){
        $state.go('classifieds.new');
      };

      function closeSidebar(){
        $mdSidenav('left').close();
      };

      function editClassified(classified){
        t.editing = true;
        openSidebar();
        t.classified = classified;
      };

      function deleteClassified(event, classified){

        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete ' + classified.title + '?')
          .ok('Yes')
          .cancel('No')
          .targetEvent(event);

        $mdDialog.show(confirm)
          .then(function(){
            var index = t.classifieds.indexOf(classified);
            t.classifieds.splice(index,1);
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

      function getCategories(arr){
        var categories = [];
        angular.forEach(arr,function(item){
          angular.forEach(item.categories,function(category){
            categories.push(category);
          });
        });
        return _.uniq(categories);
      }

    }]);

})();//ryan's way
