import * as angular from "angular";
import "angular-ui-router";
import AboutController from "./AboutController";
const About = angular.module("About", ["ui.router"]);

/* @ngInject */
function aboutConfig($stateProvider: angular.ui.IStateProvider) {
  const template: string = require("./about.html");
  $stateProvider.state("about", {
    controller: AboutController,
    controllerAs: "about",
    url: "/about",
    template
  });
}

About.config(aboutConfig);

export default About;
