import * as angular from 'angular';
import * as angularUiRouter from 'angular-ui-router';
import AboutController from "./AboutController";
import * as aboutHtml from './about.html';
const About = angular.module('About', ['ui.router']);

/* @ngInject */
function aboutConfig($stateProvider:angularUiRouter.IStateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    controller: AboutController,
    template: aboutHtml
  });
}

export default About;