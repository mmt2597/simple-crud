(function() {

   angular
      .module('orderAppController', [])
      .controller('viewListController', function($scope, $location, orderService){

         $scope.loadItems = orderService.getItem();

         $scope.addOrder = function() { $location.path('/add') };
         $scope.edit = function() { };

         $scope.delete = function(id) {
              orderService.deleteItem(id);
         };

         $scope.edit = function(x) {
            $location.path("/edit/" + x);
         };

      })

      .controller('addController', function($scope, $location, orderService){
          $scope.label = "ADD";
          $scope.status = "Add";
            $scope.save = function() {
                  orderService.saveItem({name: $scope.Item.name, 
                                         brand: $scope.Item.brand, 
                                         quantity: $scope.Item.quantity, 
                                         price: $scope.Item.price
                                    });
                  $location.path("/view-list");
            }
      })
      .controller('editController', function($scope, $location, $routeParams, orderService) {
            $scope.Item = orderService.getItem()[parseInt($routeParams.x)];
            console.log($scope.Item);
            $scope.label = "EDIT";
            $scope.status = "Update";

            $scope.save = function() {
               orderService.updateItem([parseInt($routeParams.x)], {name: $scope.Item.name, 
                                         brand: $scope.Item.brand, 
                                         quantity: $scope.Item.quantity, 
                                         price: $scope.Item.price
                                    });
               $location.path('/view-list');
            };
      });
})();