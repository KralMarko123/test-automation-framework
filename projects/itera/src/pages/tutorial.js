import { BASE_URL } from "../constants/misc";

class tutorial {
	constructor() {
		this.locators = {
			title: "h2",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/home/tutorial`);
	}

	getTitle() {
		return cy.get(this.locators.title);
	}
}

export default tutorial;
