(function() {
  var taskForm = {

    templateUrl: "partials/taskForm.html",

    controller: function(TaskService) {
      var vm = this;
      vm.addingItem = function(item) {
        if (item) {
          TaskService.addData(item);
          vm.item = "";
        }
      };
    }
  };

  angular.module("App")
    .component("taskForm", taskForm);
}());
