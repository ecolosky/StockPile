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
            .when('/add', {
                templateUrl : 'pages/add.html',
                controller : 'ModalDemoCtrl'
            })
            // route for the chapter history
            .when('/ChapterHistory', {
                templateUrl : 'pages/ChapterHistory/index.html'
            })
            // route for the stories page
            .when('/recipes', {
                templateUrl : 'pages/recipes.html',
                controller: 'recipesCtrl'
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

    app.controller('recipesCtrl', function($scope){
      $scope.recipes = [
        {name: 'Salmon with Maple Dijon Glaze', percent: 94, type: 'success'},
        {name: 'Fresh Herbed Chicken Breasts', percent: 92, type: 'success'},
        {name: 'Roast Turkey Breast with Chipotle Chili Sauce', percent: 85, type: 'success'},
        {name: 'Spicy Black Bean Burrito', percent: 78, type: 'success'},
        {name: 'Warm Quinoa Salad', percent: 72, type: 'info'},
        {name: 'Halibut with Ginger and Scallions', percent: 66, type: 'info'},
        {name: 'Pasta with Clams', percent: 58, type: 'info'},
        {name: 'Zesty Mexican Soup', percent: 44, type: 'warning'},
        {name: 'Baked Jalapeño Poppers', percent: 42, type: 'warning'},
        {name: 'Skinny Creamy Chicken Enchiladas', percent: 35, type: 'warning'},
        {name: 'Rosemary Flatbread', percent: 30, type: 'warning'},
        {name: 'Poutine', percent: 22, type: 'danger'},
        {name: 'Orange Sugared Cranberries', percent: 16, type: 'danger'},
        {name: 'New England Clam Chowder', percent: 14, type: 'danger'},
        {name: 'Mexican Pulled Chicken', percent: 10, type: 'danger'},
        {name: 'Fish Tacos', percent: 8, type: 'danger'},
        {name: 'Creamy Chicken and Rice Soup', percent: 8, type: 'danger'},
        {name: 'Italian Chili', percent: 4, type: 'danger'},
        {name: 'Cornbread', percent: 4, type: 'danger'},
        {name: 'Chocolate Chip Scones', percent: 2, type: 'danger'},
        {name: 'New England Lobster Roll', percent: 2, type: 'danger'},
        {name: 'Mediterranean Flatbread', percent: 2, type: 'danger'},
      ]
    });

    //add controller
    app.controller('ModalDemoCtrl',function($scope, $uibModal, $log){
      // modal instance created

      $scope.open = function(){
        var modalInstance = $uibModal.open({
          animation: 'true',
          templateUrl: 'ModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg'

        });
      };

    });
    //modal controller for the instance
    app.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, $log){
      $scope.cats = ['fruits', 'vegetables', 'meats', 'beverage', 'bakery', 'baking supplies'];
      $scope.temp = $scope.cats[0];
      $scope.item = {
        name: '',
        qty: 0,
        date: ''
      };

      $scope.ok = function () {
        $uibModalInstance.close($scope.item);
      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    });

    //inventory ctrl
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
    //shopping list controller
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
