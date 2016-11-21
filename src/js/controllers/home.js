function HomeController ($scope, GifService) {
  $scope.gifs = [];

  function init () {
    console.log("Starting home controller");
    GifService.allGifs().then((resp) => {
      $scope.gifs = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['$scope', 'GifService'];
export { HomeController };
