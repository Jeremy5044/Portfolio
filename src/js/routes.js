function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>Welcome Home</h1>'
    })
    .state('about', {
      url: '/about',
      template: '<h1>About Me</h1>'
    });

  $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };

