/// <reference types="cypress" />

import addRemove from "../../../projects/the-internet/src/pages/addRemove";
import basicAuth from "../../../projects/the-internet/src/pages/basicAuth";
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

		basicAuthPage.visit();
	});
});
