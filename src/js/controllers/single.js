function SingleController ($scope, GifService, $stateParams) {
  $scope.gif = {};

  function init () {
    GifService.getGif($stateParams.id).then((resp) => {
      $scope.gif = resp.data;
    });
  };

  init();
}

SingleController.$inject = ['$scope', 'GifService', '$stateParams'];
export { SingleController };
