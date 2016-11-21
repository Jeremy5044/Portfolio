function AddController ($scope, $state, GifService) {

  $scope.addGif = (gif) => {
    GifService.addGif(gif).then((resp) => {
      $state.go('home');
    });
  };

};

AddController.$inject = ['$scope', '$state', 'GifService'];
export { AddController };
