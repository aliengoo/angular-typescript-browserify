///<reference path="../../typings/tsd.d.ts"/>
///<reference path="AboutController.ts"/>

import * as angular from 'angular';
import 'angular-ui-router';
import AboutController from "./AboutController";
const About = angular.module('About', ['ui.router']);

/* @ngInject */
function aboutConfig($stateProvider:angular.ui.IStateProvider) {
  const template:string = require("./about.html");
  $stateProvider.state('about', {
    url: '/about',
    controller: AboutController,
    controllerAs: "about",
    template
  });
}

About.config(aboutConfig);

export default About;