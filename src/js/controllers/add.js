function AddController ($state, GifService) {

  let vm = this;

  this.addGif = addGif;

  function addGif (gif) {
    GifService.addGif(gif).then((resp) => {
      $state.go('home');
    });
  };

};

AddController.$inject = ['$state', 'GifService'];
export { AddController };
