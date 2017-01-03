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
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.skills', {
      url: '/skills',
      templateUrl: 'templates/skills.tpl.html'
    })
    .state('root.add', {
      url: '/projects',
      templateUrl: 'templates/projects.tpl.html',
      controller: 'AddController as add'
    })
    .state('root.single', {
      url: '/contact',
      templateUrl: 'templates/contact.tpl.html',
      controller: 'SingleController as single'
    });

  $urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
