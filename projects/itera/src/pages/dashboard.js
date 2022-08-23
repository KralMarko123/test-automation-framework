import { baseURL } from "../constants/misc";

class dashboard {
  constructor() {
    this.locators = {
      title: "h1",
      subtitle: "h3",
      createNewCustomerButton: 'a[href="/Customer/Create"]',
      searchInput: "#searching",
      searchButton: 'input[type="submit"]',
      deleteButton: ".btn-outline-danger",
      tableRow: "tr",
    };
  }

  visit() {
    cy.visit(`${baseURL}/Dashboard`);
  }

  getTitle() {
    return cy.get(this.locators.title);
  }

  getSubtitle() {
    return cy.get(this.locators.subtitle);
  }

  getCreateCustomerButton() {
    return cy.get(this.locators.createNewCustomerButton);
  }

  getSearchBar() {
    return cy.get(this.locators.searchInput);
  }

  getSubmitSearchButton() {
    return cy.get(this.locators.searchButton);
  }

  getRows() {
    return cy.get(this.locators.tableRow);
  }

 
}

export default dashboard;
