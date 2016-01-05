import * as angular from "angular";
import "angular-ui-router";
import AboutController from "./AboutController";

const name = "about";

aboutConfig.$inject = ["$stateProvider"];

function aboutConfig($stateProvider: angular.ui.IStateProvider) {
  $stateProvider.state(name, AboutController.State);
}

angular.module(name, ["ui.router"]).config(aboutConfig);




