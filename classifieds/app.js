

(function() {

  angular

    .module('classifiedsApp', ['ngMaterial','ngAnimate','ui.router'])

    .config(function($mdThemingProvider,$stateProvider){

      $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

      $stateProvider
        .state('classifieds',{
          url: '/classifieds',
          templateUrl: '/classifieds/all/classifieds.tpl.html',
          controller: 'allClassifiedsCtr as all'
        })
        .state('classifieds.new',{
          url: '/new',
          templateUrl: '/classifieds/new/classifieds.new.tpl.html',
          controller: 'newClassifiedCtr as new'
        })
        .state('classifieds.edit',{
          url: '/edit/:id',
          templateUrl: '/classifieds/edit/classifieds.edit.tpl.html',
          controller: 'editClassifiedCtr as edit',
          params: {
            classified: null
          }
        });

    });

}());//dan's way
