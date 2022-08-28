import { BASE_URL } from "../constants/misc";

class basicAuth {
	constructor() {
		this.locators = {
			title: ".example h3",
			paragraph: ".example p",
			body: "body",
		};
	}

	visit(options = undefined) {
		cy.visit(`${BASE_URL}/basic_auth`, options);
	}

	getTitle() {
		return cy.get(this.locators.title);
	}

	getParagraph() {
		return cy.get(this.locators.paragraph);
	}

	getBody() {
		return cy.get(this.locators.body);
	}
}

export default basicAuth;
