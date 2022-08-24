import { baseURL } from "../constants/misc";

class tutorial {
	constructor() {
		this.locators = {
			title: "h2",
		};
	}

	visit() {
		cy.visit(`${baseURL}/home/tutorial`);
	}

	getTitle() {
		return cy.get(this.locators.title);
	}
}

export default tutorial;
