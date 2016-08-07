

(function(){
'use strict';

  angular
    .module('classifiedsApp')
    .controller('newClassifiedCtr',
            ['$scope','$state','$mdSidenav','$timeout','$mdDialog', 'classifiedsService',
      function($scope,$state,$mdSidenav,$timeout,$mdDialog, classifiedsService){

      let t = this;
      let s = $scope;
      let st = $state;

      //functions
      t.closeSidebar = closeSidebar;
      t.saveClassified = saveClassified;
      // t.saveEdit = saveEdit;

      //vars
      t.sidenavOpen;
      // t.classifieds;
      // t.editing;

      $timeout(function(){
        $mdSidenav('left').open();
        t.sidenavOpen = true;
      });

      $scope.$watch('t.sidenavOpen',function(sidenav){
        if(sidenav === false){
          $mdSidenav('left')
            .close()
            .then(function(){
              $state.go('classifieds');
            });
        }
      });

      function closeSidebar(){
        $mdSidenav('left').close();
        t.sidenavOpen = false;
        $state.go('classifieds');
      };

      function saveClassified(classified){
        var contact = {
          name: 'Chrissy Pooh',
          phone: '800-555-1212',
          email: 'castro@gmail.com'
        }
        if (classified){
          classified.contact = contact;
          s.$emit('newClassified', classified);
          t.sidenavOpen = false;
          // showToast('Classified Saved!');
        }
      };
      //
      // function saveEdit(){
      //   t.editing = false;
      //   t.classified = {};
      //   closeSidebar();
      //   showToast('Classified Updated');
      // };
      //
      // function showToast(message){
      //
      //   $mdToast.show(
      //     $mdToast.simple()
      //       .content(message)
      //       .position('top, right')
      //       .hideDelay(3000)
      //   );
      //
      // };

    }]);

})();//ryan's way
