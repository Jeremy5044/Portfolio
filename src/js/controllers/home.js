function HomeController (GifService) {

  let vm = this;

  vm.gifs = [];

  function init () {
    console.log("Starting home controller");
    GifService.allGifs().then((resp) => {
      vm.gifs = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['GifService'];
export { HomeController };
