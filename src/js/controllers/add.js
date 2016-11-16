import { SERVER } from "../server";

function AddController ($scope, $http, $state) {

  $scope.addGif = (gif) => {
    $http.post(SERVER, gif).then((resp) => {
      $state.go('home');
    });
  };

};

AddController.$inject = ['$scope', '$http', '$state'];
export { AddController };
