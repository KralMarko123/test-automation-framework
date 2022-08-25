import { BASE_URL } from "../constants/misc";

class testAutomation {
	constructor() {
		this.locators = {
			title: ".display-3",
			card: ".card",

			//first card
			nameInput: "#name",
			phoneInput: "#phone",
			emailInput: "#email",
			passwordInput: "#password",
			addressInput: "#address",
			submitButton: 'button[name="submit"]',

			//second card
			radioButtons: 'input[type="radio"]',
			femaleRadio: "#female",
			maleRadio: "#male",
			otherRadio: "#other",

			//third card
			selectDropdown: ".custom-select",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/home/automation`);
	}

	getTitle() {
		return cy.get(this.locators.title);
	}

	getCards() {
		return cy.get(this.locators.card);
	}

	getName() {
		return cy.get(this.locators.nameInput);
	}

	getMobile() {
		return cy.get(this.locators.phoneInput);
	}

	getEmail() {
		return cy.get(this.locators.emailInput);
	}

	getPassword() {
		return cy.get(this.locators.passwordInput);
	}

	getAddress() {
		return cy.get(this.locators.addressInput);
	}

	getSubmitButton() {
		return cy.get(this.locators.submitButton);
	}

	getRadioButtons() {
		return cy.get(this.locators.radioButtons);
	}

	getFemaleRadio() {
		return cy.get(this.locators.femaleRadio);
	}

	getMaleRadio() {
		return cy.get(this.locators.maleRadio);
	}

	getOtherRadio() {
		return cy.get(this.locators.otherRadio);
	}

	getCheckboxWithId(id) {
		return cy.get(`#${id}`);
	}

	getDropdown() {
		return cy.get(this.locators.selectDropdown);
	}

	getElementByXpath(path) {
		return cy.xpath(path);
	}

	fillInFirstCard(name, mobile, email, password, address) {
		this.getName().type(name);
		this.getMobile().type(mobile);
		this.getEmail().type(email);
		this.getPassword().type(password);
		this.getAddress().type(address);
	}
}

export default testAutomation;
