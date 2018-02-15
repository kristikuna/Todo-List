(function() {
  var taskForm = {

    templateUrl: "partials/taskForm.html",
    controller: function() {
      var $ctrl = this;
      $ctrl.todoList = [];
      $ctrl.addingItem = function(item) {
        if (item) {
          $ctrl.todoList.push({ item: item });
          $ctrl.item = "";
          console.log(item);
        }
      }
    }
  }

  angular.module("App")
    .component("taskForm", taskForm);
}());
