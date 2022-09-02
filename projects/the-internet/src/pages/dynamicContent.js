import { BASE_URL } from "../constants/misc";

class dynamicContent {
	constructor() {
		this.locators = {
			paragraph: "#content > .row .large-10 ",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/dynamic_content`);
	}

	getParagraphs() {
		return cy.get(this.locators.paragraph);
	}
}

export default dynamicContent;
