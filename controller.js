(function(){
  function FormController(){
    var vm = this;
    vm.todoList = [];
    vm.addingItem = function(item){
        if(item){
          vm.todoList.push({ item: item });
          vm.item = "";
        }
    };
    vm.removeInfo = function (index){
      console.log(index);
      vm.todoList.splice(index, 1);
    }
  }



  angular
    .module("App")
    .controller("FormController", FormController);
})();
