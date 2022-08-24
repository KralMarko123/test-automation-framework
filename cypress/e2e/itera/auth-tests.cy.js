/// <reference types="cypress" />

import login from "../../../projects/itera/src/pages/login";
import register from "../../../projects/itera/src/pages/register";
import createCustomer from "../../../projects/itera/src/pages/createCustomer";
import dashboard from "../../../projects/itera/src/pages/dashboard";
import testData from "../../fixtures/testData.json";
import { generateRandomIntegerWithMax } from "../../../utils/helpers/helperFunctions";

describe("Authorization test suite", () => {
	it("VerifyLoginPageAuthorization", () => {
		const loginPage = new login();
		const dashboardPage = new dashboard();

		loginPage.visit();
		loginPage.getSubmit().click();
		loginPage.getAlertMessage().should("be.visible").and("have.text", "Wrong username or password");
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

	it("VerifyRegisterPageAuthorizaiton", () => {
		const registerPage = new register();
		const randomNumber = generateRandomIntegerWithMax(1000);

		registerPage.visit();
		registerPage.getRegisterForm().should("be.visible");
		registerPage.getSubmit().click();
		registerPage.getAlertMessages().should("have.length", 7).and("be.visible");
		registerPage.fillInInputs(
			testData.name,
			testData.surname,
			testData.email,
			testData.phone,
			testData.username + randomNumber,
			testData.password,
			testData.password
		);
		registerPage.getSubmit().click();
		registerPage.getRegisterForm().within(() => {
			cy.get("input").each((el) => cy.wrap(el).should("be.empty"));
		});
		registerPage
			.getSuccessMessage()
			.should("be.visible")
			.and("have.text", "Registration Successful");
	});

	it("VerifyUserActionsAuthorization", () => {
		const loginPage = new login();
		const dashboardPage = new dashboard();
		const createCustomerPage = new createCustomer();

		createCustomerPage.visit();
		createCustomerPage.fillInInputs(
			testData.name,
			testData.company,
			testData.address,
			testData.city,
			testData.phone,
			testData.email
		);
		createCustomerPage.getCreateCustomerButton().click();
		loginPage.getLoginForm().should("be.visible");
		cy.go("back");
		createCustomerPage.getBackToListLink().click();
		loginPage.getLoginForm().should("be.visible");
		dashboardPage.visit();
		loginPage.getLoginForm().should("be.visible");
	});
});
