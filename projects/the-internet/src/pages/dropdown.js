import { BASE_URL } from "../constants/misc";

class dropdown {
	constructor() {
		this.locators = {
			dropdown: "#dropdown",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/dropdown`);
	}

	getDropdown() {
		return cy.get(this.locators.dropdown);
	}

	getSelectedElement() {
		return cy.get(`${this.locators.dropdown} option:selected`);
	}

	getFirstDropdownElement() {
		return cy.get(`${this.locators.dropdown} option:first`);
	}
}

export default dropdown;
