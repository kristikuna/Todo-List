(function() {
  var taskForm = {

    templateUrl: "partials/taskForm.html",

    controller: function(TaskService) {
      var vm = this;
      vm.addingItem = function(item) {
        TaskService.getData(item);
        // console.log(item);
      };
    }
  };

  angular.module("App")
    .component("taskForm", taskForm);
}());
