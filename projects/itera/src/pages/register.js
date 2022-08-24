import { baseURL } from "../constants/misc";

class register {
	constructor() {
		this.locators = {
			registerForm: 'form[action="/UserRegister/NewUser"]',
			firstNameInput: "#FirstName",
			surnameInput: "#Surname",
			emailInput: "#E_post",
			mobileInput: "#Mobile",
			usernameInput: "#Username",
			passwordInput: "#Password",
			confirmPasswordInput: "#ConfirmPassword",
			submitButton: "#submit",
			alertMessage: ".text-danger",
			successMessage: ".label-success",
		};
	}

	visit() {
		cy.visit(`${baseURL}/UserRegister/NewUser`);
	}

	getRegisterForm() {
		return cy.get(this.locators.registerForm);
	}

	getFirstName() {
		return cy.get(this.locators.firstNameInput);
	}

	getSurname() {
		return cy.get(this.locators.surnameInput);
	}

	getEmail() {
		return cy.get(this.locators.emailInput);
	}

	getMobile() {
		return cy.get(this.locators.mobileInput);
	}

	getUsername() {
		return cy.get(this.locators.usernameInput);
	}

	getPassword() {
		return cy.get(this.locators.passwordInput);
	}

	getConfirmPassword() {
		return cy.get(this.locators.confirmPasswordInput);
	}

	getAlertMessages() {
		return cy.get(this.locators.alertMessage);
	}

	getSuccessMessage() {
		return cy.get(this.locators.successMessage);
	}

	getSubmit() {
		return cy.get(this.locators.submitButton);
	}

	fillInInputs(firstName, surname, email, mobile, username, password, confirmPassword) {
		this.getFirstName().type(firstName);
		this.getSurname().type(surname);
		this.getEmail().type(email);
		this.getMobile().type(mobile);
		this.getUsername().type(username);
		this.getPassword().type(password);
		this.getConfirmPassword().type(confirmPassword);
	}
}

export default register;
