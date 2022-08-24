/// <reference types="cypress" />

import login from "../../../projects/itera/src/pages/login";
import dashboard from "../../../projects/itera/src/pages/dashboard";
import createCustomer from "../../../projects/itera/src/pages/createCustomer";
import testData from "../../fixtures/testData.json";
import deleteCustomer from "../../../projects/itera/src/pages/deleteCustomer";
import { generateRandomIntegerWithMax } from "../../../utils/helpers/helperFunctions";
import detailsCustomer from "../../../projects/itera/src/pages/detailsCustomer";
import editCustomer from "../../../projects/itera/src/pages/editCustomer";

describe("Dashboard test suite", () => {
	beforeEach(() => {
		const loginPage = new login();
		loginPage.loginWithCredentials(testData.validUsername, testData.validPassword);
	});

	afterEach("Ensures created customers are deleted after tests", () => {
		const dashboardPage = new dashboard();
		const deleteCustomerPage = new deleteCustomer();

		dashboardPage.getRows().last().find(dashboardPage.locators.deleteButton).click();
		deleteCustomerPage.getDeleteButton().click();
	});

	it("VerifyUserCanCreateCustomer", () => {
		const dashboardPage = new dashboard();
		const createCustomerPage = new createCustomer();
		const randomNumber = generateRandomIntegerWithMax(10).toString();

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
						cy.wrap(cell).should("contain.text", testData.company + randomNumber);
						break;
					case 2:
						cy.wrap(cell).should("contain.text", testData.address + randomNumber);
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

	it("VerifyDetailsAreCorrectForNewlyCreatedCustomer", () => {
		const dashboardPage = new dashboard();
		const createCustomerPage = new createCustomer();
		const detailsCustomerPage = new detailsCustomer();
		const randomNumber = generateRandomIntegerWithMax(10).toString();

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
		dashboardPage.getRows().last().find(dashboardPage.locators.detailsButton).click();
		detailsCustomerPage.getTitle().should("be.visible").and("have.text", "Details");
		detailsCustomerPage.getName().should("contain.text", testData.name + randomNumber);
		detailsCustomerPage.getCompany().should("contain.text", testData.company + randomNumber);
		detailsCustomerPage.getAddress().should("contain.text", testData.address + randomNumber);
		detailsCustomerPage.getCity().should("contain.text", testData.city + randomNumber);
		detailsCustomerPage.getPhone().should("contain.text", testData.phone + randomNumber);
		detailsCustomerPage.getEmail().should("contain.text", testData.email + randomNumber);
		detailsCustomerPage.getBackToListLink().click();
	});

	it("VerifyUserCanEditNewlyCreatedCustomer", () => {
		const dashboardPage = new dashboard();
		const createCustomerPage = new createCustomer();
		const editCustomerPage = new editCustomer();
		const randomNumber = generateRandomIntegerWithMax(10).toString();

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
		dashboardPage.getRows().last().find(dashboardPage.locators.editButton).click();
		editCustomerPage.getTitle().should("be.visible").and("have.text", "Edit");
		editCustomerPage.fillInInputs(
			testData.name + "edited",
			testData.company + "edited",
			testData.address + "edited",
			testData.city + "edited",
			testData.phone + "edited",
			testData.email + "edited"
		);
		editCustomerPage.getSaveCustomerButton().click();
		dashboardPage
			.getRows()
			.last()
			.find("td")
			.each((cell, index) => {
				switch (index) {
					case 0:
						cy.wrap(cell).should("contain.text", testData.name + "edited");
						break;
					case 1:
						cy.wrap(cell).should("contain.text", testData.company + "edited");
						break;
					case 2:
						cy.wrap(cell).should("contain.text", testData.address + "edited");
						break;
					case 3:
						cy.wrap(cell).should("contain.text", testData.city + "edited");
						break;
					case 4:
						cy.wrap(cell).should("contain.text", testData.phone + "edited");
						break;
					case 5:
						cy.wrap(cell).should("contain.text", testData.email + "edited");
						break;
					default:
						break;
				}
			});
	});
});
