import { BASE_URL } from "../constants/misc";

class forgotPassword {
	locators = {
		forgotPasswordForm: "#forgot_password",
		emailInput: "#email",
		submitButton: "#form_submit",
	};

	visit() {
		cy.visit(`${BASE_URL}/forgot_password`);
	}

	getForm() {
		return cy.get(this.locators.forgotPasswordForm);
	}

	getEmailInput() {
		return cy.get(this.locators.emailInput);
	}

	getSubmitButton() {
		return cy.get(this.locators.submitButton);
	}
}

export default forgotPassword;
