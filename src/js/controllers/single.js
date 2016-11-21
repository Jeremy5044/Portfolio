function SingleController (GifService, $stateParams) {

  let vm = this;

  vm.gif = {};

  function init () {
    GifService.getGif($stateParams.id).then((resp) => {
      vm.gif = resp.data;
    });
  };

  init();
}

SingleController.$inject = ['GifService', '$stateParams'];
export { SingleController };
