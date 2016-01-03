import * as angular from 'angular';
import * as angularUiRouter from 'angular-ui-router';

const About = angular.module('About', ['ui.router']);

/* @ngInject */
function aboutConfig($stateProvider:angularUiRouter.IStateProvider) {
  $stateProvider.state('about', {
    url: '/about'
  });
}

export default About;