import { BASE_URL } from "../constants/misc";

class checkbox {
	locators = {
		checkbox: 'input[type="checkbox"]',
	};

	visit() {
		cy.visit(`${BASE_URL}/checkboxes`);
	}

	getCheckboxes() {
		return cy.get(this.locators.checkbox);
	}
}

export default checkbox;
