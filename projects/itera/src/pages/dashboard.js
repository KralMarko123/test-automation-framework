import { baseURL } from "../constants/misc";

class dashboard {
  constructor() {
    this.locators = {
      title: "h1",
    };
  }

  visit() {
    cy.visit(`${baseURL}/Dashboard`);
  }

  getTitle() {
    return cy.get(this.locators.title);
  }
}

export default dashboard;
