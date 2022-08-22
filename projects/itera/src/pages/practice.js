import { baseURL } from "../constants/misc";

class practice {
  constructor() {
    this.locators = {
      title: "h2",
      card: ".card",
    };
  }

  visit() {
    cy.visit(`${baseURL}/home/practice`);
  }

  getTitle() {
    return cy.get(this.locators.title);
  }

  getCards() {
    return cy.get(this.locators.card);
  }
}

export default practice;
