(function() {
  var taskList = {

    templateUrl: "partials/taskList.html",

    controller: function(TaskService) {
      var $ctrl = this;
      $ctrl.addingItem = function(item) {
          $ctrl.todoList.push({ item: item });
          $ctrl.item = "";
          console.log(item);
    }
      $ctrl.removeInfo = function(index) {
        $ctrl.todoList.splice(index, 1);
        console.log("working");
      }
      $ctrl.todoList = TaskService.getData();
  }
}

  angular
    .module("App")
    .component("taskList", taskList)
}());
