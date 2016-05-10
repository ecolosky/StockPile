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
            .when('/nutrition', {
                templateUrl : 'pages/nutrition.html',
                controller: 'nutCtrl'
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
        { title:"Nutrition", href:"#/nutrition", icon: 'glyphicon glyphicon-scale'  },
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

    app.controller('nutCtrl', function($scope){
      $scope.groups = [
        {name: 'Calories:', percent: 1550,max:2000, type: 'info', unit: 'Cal'},
        {name: 'Fat:', percent: 60,max:70, type: 'danger',unit: 'g'},
        {name: 'Carbs:', percent: 297,max:310, type: 'danger',unit: 'g'},
        {name: 'Protein:', percent: 45, max:50,type: 'success',unit: 'g'},
        {name: 'Sodium:', percent: 1.17,max:2.3, type: 'info',unit: 'g'},
        {name: 'Dietary Fiber:', percent: 20,max: 30, type: 'info',unit: 'g'},
        {name: 'Sugars:', percent: 47,max: 90, type: 'info',unit: 'g'}
      ]
      $scope.groupsW = [
        {name: 'Calories:', percent: 41,max:50, type: 'success', unit: 'Cal'},
        {name: 'Fat:', percent: 37,max:50, type: 'success',unit: 'g'},
        {name: 'Carbs:', percent: 52,max:50, type: 'warning',unit: 'g'},
        {name: 'Protein:', percent: 52, max:50,type: 'success',unit: 'g'},
        {name: 'Sodium:', percent: 65,max:50, type: 'warning',unit: 'g'},
        {name: 'Dietary Fiber:', percent: 50,max: 50, type: 'info',unit: 'g'},
        {name: 'Sugars:', percent: 50,max: 50, type: 'info',unit: 'g'}
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
      $scope.cats = ['fruit', 'vegetable', 'meat', 'beverage', 'bakery', 'baking supply','candy','grain'];
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
        {head: "Grain",
          items: [
            {item: "brown rice", count: "1 x 2.5 lbs bag"},
            {item: "white bread" ,count: "1 x 24 slice loaf"},
            {item: "linguine pasta", count: "1 x 1 lbs box"},
            {item: "quinoa", count: "1 x 2.5 lbs bag"}
          ]
        },
        {head: "Candy",
          items: [
            {item: "hershey chocolate",count: "2 x 46 g bar"},
            {item: "peppermint candy", count: "1 x 340 g bag"}
          ]
        },
        {head: "Baking Supplies",
          items: [
            {item: "granulated sugar", count: "1 x 5 lbs bag"},
            {item: "all-purpose flour", count: "1 x 5 lbs bag"},
            {item: "baking soda", count: "1 x 1 lb box"},
            {item: "baking powder", count: "1 x 284 g can"}
          ]
        }
      ];


    });
