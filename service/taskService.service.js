(function() {
  function TaskService() {
    var todoList = [];
    return {
      addData: addData,
      getData: getData,
      removeInfo: removeInfo
    }

    function addData(item) {
      todoList.push(item);
    }

    function getData() {
      return todoList;
    }

    function removeInfo(index) {
      todoList.splice(index, 1);
      console.log("clicked");
    }
  }
  angular
    .module("App")
    .factory("TaskService", TaskService);
}());
