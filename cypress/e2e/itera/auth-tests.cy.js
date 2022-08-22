/// <reference types="cypress" />

import dashboard from "../../../projects/itera/src/pages/dashboard";
import login from "../../../projects/itera/src/pages/login";
import testData from "../../fixtures/testData.json";

describe("Authorization test suite", () => {
  it("VerifyLoginPageAuthorization", () => {
    const loginPage = new login();
    const dashboardPage = new dashboard();

    loginPage.visit();
    loginPage.getSubmit().click();
    loginPage
      .getAlertMessage()
      .should("be.visible")
      .and("have.text", "Wrong username or password");
    loginPage.fillInInputs(testData.username, testData.password);
    loginPage.getClear().click();
    loginPage.getUsername().should("be.empty");
    loginPage.getPassword().should("be.empty");
    loginPage.fillInInputs(testData.validUsername, testData.validPassword);
    loginPage.getSubmit().click();

    dashboardPage.getTitle().should("be.visible").and("have.text", "Dashboard");
    dashboardPage
      .getSubtitle()
      .should("be.visible")
      .and("have.text", `Welcome ${testData.validUsername}`);
  });
});
