import * as angular from "angular";
import "angular-ui-router";
import "./about/About";
import AppController from "./AppController";

appConfig.$inject = ["$urlRouterProvider"];

function appConfig($urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $urlRouterProvider.otherwise("/about");
}

const App = angular.module("App", ["ui.router", "about"])
  .config(appConfig)
  .controller("AppController", AppController);

export default App;






