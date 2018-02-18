(function() {
  function TaskService() {
    var todoList = [];
    return {
      getData: getData,
      setData: setData,
      removeInfo: removeInfo
    }

    function getData(item) {
      todoList.push(item);
      document.getElementById('addInput').value = "";
    }

    function setData() {
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
