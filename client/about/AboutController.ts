const template: string = require("./about.html");
const name = "about";

export default class AboutController {
  public static $inject = [];

  public static State = {
    controller: AboutController,
    controllerAs: name,
    url: `/${name}`,
    template
  };

  public message: string;

  constructor() {
    this.message = "TestTest";
  }
}


