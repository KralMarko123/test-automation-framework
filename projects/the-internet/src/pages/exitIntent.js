import { BASE_URL } from "../constants/misc";

class exitIntent {
	locators = {
		document: "html",
		modal: ".modal",
		modalContainer: "#ouibounce-modal",
	};

	visit() {
		cy.visit(`${BASE_URL}/exit_intent`);
	}

	getDocument() {
		return cy.get(this.locators.document);
	}

	getModal() {
		return cy.get(this.locators.modal);
	}

	getModalContainer() {
		return cy.get(this.locators.modalContainer);
	}
}

export default exitIntent;
