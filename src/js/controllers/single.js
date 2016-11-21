function SingleController (GifService, $stateParams) {

  this.gif = {};

  this.init = () => {
    GifService.getGif($stateParams.id).then((resp) => {
      this.gif = resp.data;
    });
  };

  this.init();
}

SingleController.$inject = ['GifService', '$stateParams'];
export { SingleController };
