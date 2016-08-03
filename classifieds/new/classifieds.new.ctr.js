

(function(){
'use strict';

  angular
    .module('ngClassifieds')
    .controller('newClassifiedCtr',
            ['$mdSidenav','$mdToast','$mdDialog', 'classifiedsService',
      function($mdSidenav,$mdToast,$mdDialog, classifiedsService){

      let s = this;

      //functions
      s.closeSidebar = closeSidebar;
      s.openSidebar = openSidebar;
      s.saveClassified = saveClassified;
      s.saveEdit = saveEdit;

      //vars
      s.classifieds;
      s.editing;

      var contact = {
        name: 'Chrissy Pooh',
        phone: '800-555-1212',
        email: 'castro@gmail.com'
      }

      function openSidebar(){
        $mdSidenav('left').open();
      };

      function closeSidebar(){
        $mdSidenav('left').close();
      };

      function saveClassified(classified){
        if (classified){
          classified.contact = contact;
          s.classifieds.push(classified);
          s.classified = {};
          closeSidebar();
          showToast('Classified Saved!');
        }
      };

      function saveEdit(){
        s.editing = false;
        s.classified = {};
        closeSidebar();
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
