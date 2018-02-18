(function() {
  var taskList = {
    bindings: {
      items: "<"
    },

    templateUrl: "partials/taskList.html",
    controller: function(TaskService) {
      var $ctrl = this;
      $ctrl.taskToDisplay = TaskService.setData();
      $ctrl.rmInfo = function(item) {
        TaskService.removeInfo(item);
      }
    }
  }

  angular
    .module("App")
    .component("taskList", taskList)
}());
