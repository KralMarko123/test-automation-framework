import { BASE_URL } from "../constants/misc";

class splitTest {
	constructor() {
		this.locators = {
			title: ".example h3",
			paragraph: ".example p",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/abtest`);
	}

	getTitle() {
		return cy.get(this.locators.title);
	}

	getParagraph() {
		return cy.get(this.locators.paragraph);
	}
}

export default splitTest;
