(function() {
  function TaskService () {
    var todoList = [];
    return {
      getData: getData,
      setData: setData
    }

    function getData() {
      return todoList;
    }

    function setData (item){
      todoList = item;
    }

}
  angular
    .module("App")
    .factory("TaskService", TaskService);
}());
