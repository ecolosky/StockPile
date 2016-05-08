//=============================================================================
//  Angular JS Script
//  Ed Colosky
//  April, 2016
//=============================================================================


var app = angular.module('app', ['ui.bootstrap','ngRoute','ngAnimate']);
// configure the routes
    app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/inventory', {
                templateUrl : 'pages/inventory.html',
                controller  : 'inventoryCtrl'
            })

            // route for the gallery page
            .when('/list', {
                templateUrl : 'pages/list.html',
                controller  : 'listCtrl'
            })

            // route for the stories page
            .when('/stories', {
                templateUrl : 'pages/stories.html',
                controller : 'storyCtrl'
            })
            // route for the chapter history
            .when('/ChapterHistory', {
                templateUrl : 'pages/ChapterHistory/index.html'
            })
            // route for the stories page
            .when('/links', {
                templateUrl : 'pages/links.html'
            });
    });
    //main controller
    app.controller('mainCtrl',function($scope){

      $scope.tabs = [
        { title:"Inventory", href:"#/inventory", icon: 'glyphicon glyphicon-list' },
        { title:"Shopping List", href:"#/list" ,icon: 'glyphicon glyphicon-shopping-cart' },
        { title:"Add Item", href:"#/add" ,icon: 'glyphicon glyphicon-plus' },
        { title:"Nuitrition", href:"#/nuitrition", icon: 'glyphicon glyphicon-scale'  },
        { title:"Recipes", href:"#/recipes", icon: 'glyphicon glyphicon-cutlery'  }
      ];
      $scope.changeTab = function(data) {
        window.location.hash = data.href;
        $scope.title = data.title;
      };
    });
    app.controller('inventoryCtrl',function($scope){
      $scope.title = "Inventory";
      $scope.inventory = [
        {head: "Produce",
          items: [
            {item: "apples", count: "2"},
            {item: "bannannas", count: "6"},
            {item: "oranges",class: "-danger" ,count: "1"},
            {item: "strawberries", count: "1 Qt."}
          ]
        },
        {head: "Meat",
          items: [
            {item: "chicken",class: "-warning" ,count: "5 lbs"},
            {item: "pork tenderloin", count: "3 lbs"},
            {item: "bacon", count: "1.5 lbs"},
            {item: "chicken sausage", count: "5 links"}
          ]
        },
        {head: "Beverages",
          items: [
            {item: "beer", count: "2.5 gal"},
            {item: "wine", count: "2.25 L"},
            {item: "milk", count: "0.5 gal"},
            {item: "pepsi", count: "2 L"}
          ]
        }
      ];


    });

    app.controller('listCtrl',function($scope){
      $scope.list = [
        {head: "Produce",
          items: [
            {item: "bannannas", count: "6"},
            {item: "oranges",class: "-success" ,count: "1"},
            {item: "strawberries", count: "1 Qt."}
          ]
        },
        {head: "Meat",
          items: [
            {item: "chicken",class: "" ,count: "5 lbs"},
            {item: "pork tenderloin", count: "3 lbs"},
            {item: "bacon", count: "1.5 lbs"},
            {item: "chicken sausage",class: "-success" , count: "5 links"}
          ]
        },
        {head: "Beverages",
          items: [
            {item: "beer", count: "2.5 gal"},
            {item: "wine", count: "2.25 L"},
            {item: "milk", count: "0.5 gal"},
            {item: "pepsi", count: "2 L"}
          ]
        }
      ];


    });
