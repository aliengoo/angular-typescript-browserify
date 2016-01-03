import * as angular from 'angular';

export default class AboutController {

  public message:String;

  /* @ngInject */
  constructor(private $http:angular.IHttpService) {

  }
}