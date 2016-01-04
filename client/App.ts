
import * as angular from "angular";
import "angular-ui-router";
import AboutModule from "./about/AboutModule";
import AppController from "./AppController";

const AppModule = angular.module("App", ["ui.router", AboutModule.name]);

/* @ngInject */
function appConfig($urlRouterProvider:angular.ui.IUrlRouterProvider) {
  $urlRouterProvider.otherwise("/about");
}
AppModule.controller("AppController", AppController);
AppModule.config(appConfig);

export default AppModule;

