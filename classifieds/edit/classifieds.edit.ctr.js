

(function(){
'use strict';

  angular
    .module('classifiedsApp')
    .controller('editClassifiedCtr',
            ['$scope','$state','$mdSidenav','$timeout','$mdDialog', 'classifiedsService',
      function($scope,$state,$mdSidenav,$timeout,$mdDialog, classifiedsService){

      let t = this;
      let s = $scope;
      let st = $state;

      //functions
      t.closeSidebar = closeSidebar;
      t.update = update;

      //vars
      t.sidenavOpen;
      t.classifieds = classifiedsService.ref;
      t.classified = t.classifieds.$getRecord(st.params.id);
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
        st.go('classifieds');
      };

      function update(){
        t.classifieds.$save(t.classified)
          .then(function(){
            s.$emit('updateToast','Classified Updated!');
            $mdSidenav('left').close();
            t.sidenavOpen = false;
            st.go('classifieds');
          });
      };

    }]);

})();//ryan's way
