import { BASE_URL } from "../constants/misc";

class addRemove {
	constructor() {
		this.locators = {
			addButton: 'button[onclick="addElement()"]',
			addedButton: ".added-manually",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/add_remove_elements/`);
	}

	getAddButton() {
		return cy.get(this.locators.addButton);
	}

	getAddedButtons() {
		return cy.get(this.locators.addedButton);
	}
}

export default addRemove;
