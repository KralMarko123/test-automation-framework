/// <reference types="cypress" />

import shared from "../../../projects/itera/src/pages/shared";
import home from "../../../projects/itera/src/pages/home";
import practice from "../../../projects/itera/src/pages/practice";
import tutorial from "../../../projects/itera/src/pages/tutorial";
import login from "../../../projects/itera/src/pages/login";
import register from "../../../projects/itera/src/pages/register";
import createCustomer from "../../../projects/itera/src/pages/createCustomer";
import testAutomation from "../../../projects/itera/src/pages/testAutomation";

describe("UI test suite", () => {
	it("VerifyHomePageIsDisplayedCorrectly", () => {
		const sharedLayout = new shared();
		const homePage = new home();

		homePage.visit();
		homePage.getMain().should("be.visible");

		sharedLayout.getLogo().should("be.visible");
		sharedLayout.getSearchBar().should("be.visible");
		sharedLayout.getSubmitButton().should("be.visible");
		sharedLayout.getFooter().should("be.visible").should("contain.text", "© 2022 - Itera QA team");
	});

	it("VerifyPracticePageIsDisplayedCorrectly", () => {
		const practicePage = new practice();

		practicePage.visit();
		practicePage.getTitle().should("have.text", "Software test automation exercises");
		practicePage.getCards().should("have.length", 8);
	});

	it("VerifyTutorialPageIsDisplayedCorrectly", () => {
		const tutorialPage = new tutorial();

		tutorialPage.visit();
		tutorialPage.getTitle().should("have.text", "Tutorial");
	});

	it("VerifyLoginPageIsDisplayedCorrectly", () => {
		const loginPage = new login();

		loginPage.visit();
		loginPage.getLoginForm().should("be.visible");
	});

	it("VerifyRegisterPageIsDisplayedCorrectly", () => {
		const registerPage = new register();

		registerPage.visit();
		registerPage.getRegisterForm().should("be.visible");
	});

	it("VerifyCreateCustomerPageIsDisplayedCorrectly", () => {
		const createCustomerPage = new createCustomer();

		createCustomerPage.visit();
		createCustomerPage.getCreateCustomerForm().should("be.visible");
	});

	it("VerifyTestAutomationPageIsDisplayedCorrectly", () => {
		const testAutomationPage = new testAutomation();

		testAutomationPage.visit();
		testAutomationPage
			.getTitle()
			.should("be.visible")
			.and("have.text", "Test automation practice form");
		testAutomationPage.getCards().should("be.visible").and("have.length", 5);
	});
});
