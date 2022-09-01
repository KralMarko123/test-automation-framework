import { BASE_URL } from "../constants/misc";

class dynamicControls {
	locators = {
		toggleCheckboxButton: 'button[onclick="swapCheckbox()"]',
		toggleInputButton: 'button[onclick="swapInput()"]',
		checkbox: 'input[type="checkbox"]',
		textbox: 'input[type="text"]',
		loadingBar: "img[src='/img/ajax-loader.gif']",
		message: "#message",
	};

	visit() {
		cy.visit(`${BASE_URL}/dynamic_controls`);
	}

	getToggleCheckboxButton() {
		return cy.get(this.locators.toggleCheckboxButton);
	}

	getToggleInputButton() {
		return cy.get(this.locators.toggleInputButton);
	}

	getCheckbox() {
		return cy.get(this.locators.checkbox);
	}

	getTextbox() {
		return cy.get(this.locators.textbox);
	}

	getLoadingBars() {
		return cy.get(this.locators.loadingBar);
	}

	getMessages() {
		return cy.get(this.locators.message);
	}
}

export default dynamicControls;
