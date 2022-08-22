import { baseURL } from "../constants/misc";

class home {
  constructor() {
    this.locators = {
      main: ".jumbotron",
    };
  }

  visit() {
    cy.visit(baseURL);
  }

  getMain() {
    return cy.get(this.locators.main);
  }
}

export default home;
