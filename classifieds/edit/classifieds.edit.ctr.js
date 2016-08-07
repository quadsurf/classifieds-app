

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
      t.classified = st.params.classified;
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
        st.go('classifieds');
      };

      function update(){
        s.$emit('updateToast','Classified Updated!');
        $mdSidenav('left').close();
        t.sidenavOpen = false;
        st.go('classifieds');
      };
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
