import { BASE_URL } from "../constants/misc";

class challengingDOM {
	locators = {
		button: ".button",
		successButton: ".button.success",
		alertButton: ".button.alert",
	};

	visit() {
		cy.visit(`${BASE_URL}/challenging_dom`);
	}

	getButtons() {
		return cy.get(this.locators.button);
	}

	getSuccessButton() {
		return cy.get(this.locators.successButton);
	}

	getAlertButton() {
		return cy.get(this.locators.alertButton);
	}

	getTableRowCellsAtColumn(column) {
		return cy.get(`tbody tr > td:nth-of-type(${column})`);
	}
}

export default challengingDOM;
