import angular from 'angular';

import { routerConfig } from './routes';
import { HomeController } from './controllers/home';
import { AddController } from './controllers/add';
import { SingleController } from './controllers/single';
import { LayoutController } from './controllers/layout';
import { GifService } from './services/gif-server';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('SingleController', SingleController)
  .service('GifService', GifService);
//  .constant('SERVER', SERVER);
