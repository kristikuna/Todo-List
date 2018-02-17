(function() {
  var taskForm = {

    templateUrl: "partials/taskForm.html",

    controller: function(TaskService) {
      var $ctrl = this;
      $ctrl.todoList = function(item){
          TaskService.getData(item);

      };
    }
  };

  angular.module("App")
    .component("taskForm", taskForm);
}());
