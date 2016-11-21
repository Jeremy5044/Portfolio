function routerConfig ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as layout'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html',
      controller: 'HomeController as home'
    })
    .state('root.about', {
      url: '/about',
      template: '<h1>About Me</h1>'
    })
    .state('root.dogs', {
      url: '/dogs',
      templateUrl: 'templates/dogs.tpl.html'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tpl.html',
      controller: 'AddController'
    })
    .state('root.single', {
      url: '/gif/:id',
      templateUrl: 'templates/single.tpl.html',
      controller: 'SingleController as single'
    });

  $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
