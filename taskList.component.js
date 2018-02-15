(function() {
  var taskList = {
    bindings: {
     todoList : "<"
   },

    templateUrl: "partials/taskList.html",
    controller: function() {
      var $ctrl = this;
      $ctrl.removeInfo = function(index) {
        $ctrl.todoList.splice(index, 1);
      }
    }
  };

  angular.module("App")
    .component("taskList", taskList)
}());
