import { baseURL } from "../constants/misc";

class createCustomer {
  constructor() {
    this.locators = {
      createCustomerForm: 'form[action="/Customer/Create"]',
      nameInput: "#Name",
      companyInput: "#Company",
      addressInput: "#Address",
      cityInput: "#City",
      phoneInput: "#Phone",
      emailInput: "#Email",
      createCustomerButton: 'input[value="Create"]',
      backToListLink: 'a[href="/Dashboard"]',
    };
  }

  visit() {
    cy.visit(`${baseURL}/Customer/Create`);
  }

  getCreateCustomerForm() {
    return cy.get(this.locators.createCustomerForm);
  }

  getName() {
    return cy.get(this.locators.nameInput);
  }

  getCompany() {
    return cy.get(this.locators.companyInput);
  }

  getAddress() {
    return cy.get(this.locators.addressInput);
  }

  getCity() {
    return cy.get(this.locators.cityInput);
  }

  getPhone() {
    return cy.get(this.locators.phoneInput);
  }

  getEmail() {
    return cy.get(this.locators.emailInput);
  }

  getCreateCustomerButton() {
    return cy.get(this.locators.createCustomerButton);
  }

  getBackToListLink() {
    return cy.get(this.locators.backToListLink);
  }

  fillInInputs(name, company, address, city, phone, email) {
    this.getName().type(name);
    this.getCompany().type(company);
    this.getAddress().type(address);
    this.getCity().type(city);
    this.getPhone().type(phone);
    this.getEmail().type(email);
  }
}

export default createCustomer;
