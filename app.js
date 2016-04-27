//=============================================================================
//  Angular JS Script
//  Ed Colosky
//  April, 2016
//=============================================================================


var app = angular.module('app', ['ui.bootstrap','ngRoute','ngAnimate']);
// configure the routes
    // app.config(function($routeProvider) {
    //     $routeProvider
    //
    //         // route for the home page
    //         .when('/', {
    //             templateUrl : 'pages/home.html',
    //             controller  : 'mainCtrl'
    //         })
    //
    //         // route for the gallery page
    //         .when('/gallery', {
    //             templateUrl : 'pages/gallery.html',
    //             controller  : 'galleryCtrl'
    //         })
    //
    //         // route for the stories page
    //         .when('/stories', {
    //             templateUrl : 'pages/stories.html',
    //             controller : 'storyCtrl'
    //         })
    //         // route for the chapter history
    //         .when('/ChapterHistory', {
    //             templateUrl : 'pages/ChapterHistory/index.html'
    //         })
    //         // route for the stories page
    //         .when('/links', {
    //             templateUrl : 'pages/links.html'
    //         });
    // });

    app.controller('mainCtrl',function($scope){

      $scope.tabs = [
        { title:"Inventory", href:"#/", icon: 'glyphicon glyphicon-list' },
        { title:"Shopping List", href:"#/gallery" ,icon: 'glyphicon glyphicon-shopping-cart' },
        { title:"Add Item", href:"#/stories" ,icon: 'glyphicon glyphicon-plus' },
        { title:"Nuitrition", href:"#/ChapterHistory", icon: 'glyphicon glyphicon-scale'  },
        { title:"Reipes", href:"#/links", icon: 'glyphicon glyphicon-cutlery'  }
      ];
      // $scope.changeTab = function(data) {
      //   window.location.hash = data;
      // };
    });
