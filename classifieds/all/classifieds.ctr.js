

(function(){
'use strict';

  angular
    .module('classifiedsApp')
    .controller('allClassifiedsCtr',
            ['$scope','$state','$http','$mdSidenav','$mdToast','$mdDialog','classifiedsService',
      function($scope,$state,$http,$mdSidenav,$mdToast,$mdDialog,classifiedsService){

      let t = this;
      let s = $scope;
      let st = $state;

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

      t.classifieds = classifiedsService.ref;

      t.classifieds.$loaded()
        .then(function(classifieds){
          t.categories = getCategories(classifieds)
        }
      );

      function getCategories(arr){
        var categories = [];
        angular.forEach(arr,function(item){
          angular.forEach(item.categories,function(category){
            categories.push(category);
          });
        });
        return _.uniq(categories);
      }

      s.$on('newClassified',function(event,classified){
        t.classifieds.$add(classified);
        // classified.id = t.classifieds.length + 1;
        // t.classifieds.push(classified);
        showToast('Classified Saved!');
      });


      s.$on('updateToast',function(event,message){
        showToast(message);
      });

      function openSidebar(){
        st.go('classifieds.new');
      };

      function closeSidebar(){
        $mdSidenav('left').close();
      };

      function editClassified(classified){
        st.go('classifieds.edit',{
          id: classified.$id
        });
      };

      function deleteClassified(event, classified){

        var confirm = $mdDialog.confirm()
          .title('Are you sure you want to delete ' + classified.title + '?')
          .ok('Yes')
          .cancel('No')
          .targetEvent(event);

        $mdDialog.show(confirm)
          .then(function(){
            t.classifieds.$remove(classified);
            showToast('Classified Deleted!')
          },function(){});
      };

      function showToast(message){

        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );

      };

      // var ref = firebase.database().ref().child("classdb");
      // // download the data into a local object
      // var sync = $firebaseArray(ref);
      // // synchronize the object with a three-way data binding
      // // click on `index.html` above to see it used in the DOM!
      // sync.$bindTo(s, "classdb");

    }]);

})();//ryan's way
