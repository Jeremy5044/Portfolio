function LayoutController ($scope) {
  console.log("LAYOUT CONTROLLER IS ALIVE");

  $scope.clickMe = function () {
    console.log("I got clicked");
  };
}

LayoutController.$inject = ['$scope'];
export { LayoutController };
