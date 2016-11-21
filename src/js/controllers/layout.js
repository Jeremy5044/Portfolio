function LayoutController () {
  console.log("LAYOUT CONTROLLER IS ALIVE");

  this.message = 'Hello from LayoutController!';

  this.clickMe = () => {
    console.log("I got clicked");
  };
}

LayoutController.$inject = [];
export { LayoutController };
