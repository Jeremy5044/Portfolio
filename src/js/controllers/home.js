import { SERVER } from "../server";

function HomeController ($scope, $http) {
  $scope.gifs = [];

  function init () {
    $http.get(SERVER).then((resp) => {
      $scope.gifs = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['$scope', '$http'];
export { HomeController };
