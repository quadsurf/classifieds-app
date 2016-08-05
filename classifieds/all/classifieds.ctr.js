

(function(){
'use strict';

  angular
    .module('ngClassifieds')
    .controller('allClassifiedsCtr',
            ['$state','$http','$mdSidenav','$mdToast','$mdDialog','classifiedsService',
      function($state,$http,$mdSidenav,$mdToast,$mdDialog,classifiedsService){

      let s = this;

      //functions
      s.closeSidebar = closeSidebar;
      s.deleteClassified = deleteClassified;
      s.editClassified = editClassified;
      s.openSidebar = openSidebar;

      //vars
      s.categories;
      s.classified;
      s.classifieds;
      s.editing;

      classifiedsService.getClassifieds()
        .then(function(classifieds){
          s.classifieds = classifieds.data;
          s.categories = getCategories(s.classifieds);
        });

      function openSidebar(){
        $state.go('classifieds.new');
      };

      function closeSidebar(){
        $mdSidenav('left').close();
      };

      function editClassified(classified){
        s.editing = true;
        openSidebar();
        s.classified = classified;
      };

      function deleteClassified(event, classified){

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
