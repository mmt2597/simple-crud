(function() {

   angular
      .module('orderAppService', [])
      .factory('orderService', function() {
         
         var svc = {};

         var items = [
            {
               name: 'Cellphone',
               brand: 'Samsung',
               quantity: 5,
               price: 120
            },
            {
               name: 'Computer',
               brand: 'Apple',
               quantity: 15,
               price: 350
            }];

         svc.deleteItem = function(index) {
            items.splice(index, 1);
         };

         svc.saveItem = function(orderItem) {
            items.push(orderItem);
         };

         svc.updateItem = function(index, orderItem) {
            items[index] = orderItem;
         };

         svc.getItem = function() {
            return items;
         };

         return svc;
      });
})();