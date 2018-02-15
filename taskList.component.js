(function() {
  var taskList = {
    bindings: {
     todoList: "<"
   },

    templateUrl: "partials/taskList.html",
    controller: function() {
      var vm = this;
      vm.removeInfo = function(index) {
        vm.todoList.splice(index, 1);
      }
    }
  };

  angular.module("App")
    .component("taskList", taskList)
}());
