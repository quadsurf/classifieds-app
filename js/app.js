

(function() {

  angular
    .module('ngClassifieds', ['ngMaterial','ngAnimate'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');
    });

}());//dan's way
