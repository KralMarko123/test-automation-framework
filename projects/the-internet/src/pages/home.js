import { BASE_URL } from "../constants/misc";

class home {
	constructor() {
		this.locators = {
			mainSection: "#content",
			title: ".heading",
			exerciseLinks: "ul a",
		};
	}

	visit() {
		cy.visit(BASE_URL);
	}

	getContent() {
		return cy.get(this.locators.mainSection);
	}
	getTitle() {
		return cy.get(this.locators.title);
	}

	getExerciseLinks() {
		return cy.get(this.locators.exerciseLinks);
	}
}

export default home;
