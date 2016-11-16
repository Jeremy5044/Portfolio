import { SERVER } from "../server";

function SingleController ($scope, $http, $stateParams) {
  $scope.gif = {};

  function init () {
    let url = SERVER + $stateParams.id;
    $http.get(url).then((resp) => {
      $scope.gif = resp.data;
    });
  };

  init();
}

SingleController.$inject = ['$scope', '$http', '$stateParams'];
export { SingleController };
