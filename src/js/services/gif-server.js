import { SERVER } from "../server";

function GifService ($http) {

  this.allGifs = function () {
    return $http.get(SERVER);
  };

  this.addGif = function (gif) {
    return $http.post(SERVER, gif);
  };

  this.getGif = function (id) {
    let url = SERVER + id;
    return $http.get(url);
  };

};

GifService.$inject = ['$http'];
export { GifService };
