/// <reference types="cypress" />

import dashboard from "../../../projects/itera/src/pages/dashboard";
import login from "../../../projects/itera/src/pages/login";

describe("Authorization test suite", () => {
  it("VerifyLoginPageAuthorization", () => {
    const loginPage = new login();
    const dashboardPage = new dashboard();

    loginPage.visit();
    loginPage.getSubmit().click();
    loginPage
      .getAlertMessage()
      .should("be.visible")
      .and()
      .should("have.text", "Wrong username or password");
    loginPage.fillInInputs("randomUsername", "randomPassword");
    loginPage.getClear().click();
    loginPage.getUsername().should("be.empty");
    loginPage.getPassword().should("be.empty");
    loginPage.fillInInputs("marko", "marko");
    loginPage.getSubmit().click();

    dashboardPage
      .getTitle()
      .should("be.visible")
      .should("have.text", "Dashboard");
  });
});
