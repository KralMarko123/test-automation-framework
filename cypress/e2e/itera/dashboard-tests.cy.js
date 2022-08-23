/// <reference types="cypress" />

import login from "../../../projects/itera/src/pages/login";
import dashboard from "../../../projects/itera/src/pages/dashboard";
import createCustomer from "../../../projects/itera/src/pages/createCustomer";
import testData from "../../fixtures/testData.json";
import deleteCustomer from "../../../projects/itera/src/pages/deleteCustomer";
import { generateRandomIntegerWithMax } from "../../../utils/helpers/helperFunctions";

describe("Dashboard test suite", () => {
  beforeEach(() => {
    const loginPage = new login();
    loginPage.loginWithCredentials(
      testData.validUsername,
      testData.validPassword
    );
  });

  afterEach("Ensures created customers are deleted after tests", () => {
    const dashboardPage = new dashboard();
    const deleteCustomerPage = new deleteCustomer();

    dashboardPage
      .getRows()
      .last()
      .find(dashboardPage.locators.deleteButton)
      .click();
    deleteCustomerPage.getDeleteButton().click();
  });

  it("VerifyUserCanCreateCustomerFromDashboard", () => {
    const dashboardPage = new dashboard();
    const createCustomerPage = new createCustomer();
    const randomNumber = generateRandomIntegerWithMax(1000).toString();

    dashboardPage.getCreateCustomerButton().click();
    createCustomerPage.fillInInputs(
      testData.name + randomNumber,
      testData.company + randomNumber,
      testData.address + randomNumber,
      testData.city + randomNumber,
      testData.phone + randomNumber,
      testData.email + randomNumber
    );
    createCustomerPage.getCreateCustomerButton().click();
    dashboardPage
      .getRows()
      .last()
      .find("td")
      .each((cell, index) => {
        switch (index) {
          case 0:
            cy.wrap(cell).should("contain.text", testData.name + randomNumber);
            break;
          case 1:
            cy.wrap(cell).should(
              "contain.text",
              testData.company + randomNumber
            );
            break;
          case 2:
            cy.wrap(cell).should(
              "contain.text",
              testData.address + randomNumber
            );
            break;
          case 3:
            cy.wrap(cell).should("contain.text", testData.city + randomNumber);
            break;
          case 4:
            cy.wrap(cell).should("contain.text", testData.phone + randomNumber);
            break;
          case 5:
            cy.wrap(cell).should("contain.text", testData.email + randomNumber);
            break;
          default:
            break;
        }
      });
  });
});
