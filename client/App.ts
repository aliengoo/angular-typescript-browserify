///<reference path="../typings/tsd.d.ts"/>
import * as angular from 'angular';

const AppModule = angular.module('App', ['ui.router']);

/* @ngInject */
function appConfig($urlRouterProvider:angular.ui.IUrlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

AppModule.config(appConfig);

export default AppModule;

