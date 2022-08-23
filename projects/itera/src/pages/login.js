import { baseURL } from "../constants/misc";

class login {
  constructor() {
    this.locators = {
      loginForm: 'form[action="/Login/Authorize"]',
      usernameInput: "#Username",
      passwordInput: "#Password",
      submitButton: 'input[name="login"]',
      clearButton: 'input[name="clear"]',
      alertMessage: ".alert-danger",
    };
  }

  visit() {
    cy.visit(`${baseURL}/Login`);
  }

  getLoginForm() {
    return cy.get(this.locators.loginForm);
  }

  getUsername() {
    return cy.get(this.locators.usernameInput);
  }

  getPassword() {
    return cy.get(this.locators.passwordInput);
  }

  getSubmit() {
    return cy.get(this.locators.submitButton);
  }

  getClear() {
    return cy.get(this.locators.clearButton);
  }

  getAlertMessage() {
    return cy.get(this.locators.alertMessage);
  }

  fillInInputs(username, password) {
    this.getUsername().type(username);
    this.getPassword().type(password);
  }

  loginWithCredentials(username, password) {
    this.visit();
    this.fillInInputs(username, password);
    this.getSubmit().click();
  }
}

export default login;
