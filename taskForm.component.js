(function() {
  var taskForm = {

    templateUrl: "partials/taskForm.html",
    controller: function() {
      var vm = this;
      vm.todoList = [];
      vm.addingItem = function(item) {
        if (item) {
          vm.todoList.push({ item: item });
          vm.item = "";
          console.log(todoList);
        }
      }
    }
  }

  angular.module("App")
    .component("taskForm", taskForm);
}());
