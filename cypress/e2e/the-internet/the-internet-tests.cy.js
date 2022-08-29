/// <reference types="cypress" />

import addRemove from "../../../projects/the-internet/src/pages/addRemove";
import basicAuth from "../../../projects/the-internet/src/pages/basicAuth";
import brokenImages from "../../../projects/the-internet/src/pages/brokenImages";
import challengingDOM from "../../../projects/the-internet/src/pages/challengingDOM";
import checkbox from "../../../projects/the-internet/src/pages/checkbox";
import home from "../../../projects/the-internet/src/pages/home";
import splitTest from "../../../projects/the-internet/src/pages/splitTest";

describe("The Internet Test Suite", () => {
	it("VerifyHomePageIsLoadedProperly", () => {
		const homePage = new home();

		homePage.visit();
		homePage.getContent().should("be.visible");
		homePage.getTitle().should("have.text", "Welcome to the-internet");
		homePage.getExerciseLinks().should("have.length", 44);
	});

	it("Simulates split testing", () => {
		const splitTestPage = new splitTest();
		const parapgraphTextToCheck =
			"Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).";

		splitTestPage.visit();
		splitTestPage.getTitle().should("be.visible");
		splitTestPage.getParagraph().should("contain.text", parapgraphTextToCheck);
	});

	it("Adds/Removes DOM Elements", () => {
		const addRemovePage = new addRemove();

		addRemovePage.visit();
		addRemovePage.getAddButton().click();
		addRemovePage.getAddedButtons().should("be.visible").and("have.length", 1).click();
		addRemovePage.getAddedButtons().should("not.exist");
		cy.clickElementXTimes(addRemovePage.locators.addButton, 10);
		addRemovePage.getAddedButtons().should("have.length", 10);
		addRemovePage.getAddedButtons().click({ multiple: true });
		addRemovePage.getAddedButtons().should("not.exist");
	});

	it("Mimicks basic Auth", () => {
		const basicAuthPage = new basicAuth();

		basicAuthPage.visit({
			failOnStatusCode: false,
		});
		basicAuthPage.getBody().should("contain.text", "Not authorized");
		basicAuthPage.visit({
			auth: {
				username: "admin",
				password: "admin",
			},
		});
		basicAuthPage.getTitle().should("have.text", "Basic Auth");
		basicAuthPage
			.getParagraph()
			.should("contain.text", "Congratulations! You must have the proper credentials.");
	});

	it("Checks broken images", () => {
		const brokenImagesPage = new brokenImages();

		brokenImagesPage.visit();
		brokenImagesPage.getFirstBrokenImage().then((response) => {
			expect(response.status).to.eq(404);
		});
		brokenImagesPage.getSecondBrokenImage().then((response) => {
			expect(response.status).to.eq(404);
		});
	});

	it("Tests a challenging DOM layout", () => {
		const challengingDOMPage = new challengingDOM();

		challengingDOMPage.visit();
		challengingDOMPage.getButtons().first().click();
		challengingDOMPage.getAlertButton().click();
		challengingDOMPage.getSuccessButton().click();
		for (let column of [1, 2, 3, 4, 5, 6]) {
			challengingDOMPage.getTableRowCellsAtColumn(column).each((el, index) => {
				cy.wrap(el).should("contain.text", index);
			});
		}
		challengingDOMPage.getCanvas().should("be.visible");
	});

	it("Tests checkboxes", () => {
		const checkboxPage = new checkbox();

		checkboxPage.visit();
		checkboxPage.getCheckboxes().first().should("not.be.checked");
		checkboxPage.getCheckboxes().last().should("be.checked").uncheck();
		checkboxPage.getCheckboxes().should("not.be.checked");
		checkboxPage.getCheckboxes().first().check().should("be.checked");
	});

	
});
