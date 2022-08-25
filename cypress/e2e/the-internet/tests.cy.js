/// <reference types="cypress" />

import home from "../../../projects/the-internet/src/pages/home";

describe("the-internet test suite", () => {
	it("first test", () => {
		const homePage = new home();

		homePage.visit();
		homePage.getContent().should("be.visible");
		homePage.getTitle().should("have.text", "Welcome to the-internet");
		homePage.getExerciseLinks().should("have.length", 44);
	});
});
