import { BASE_URL } from "../constants/misc";

class auth {
	locators = {
		usernameInput: "#username",
		passwordInput: "#password",
		loginButton: 'button[type="submit"]',
		errorSection: "#flash",
		logoutButton: 'a[href="/logout"]',
	};

	visit() {
		cy.visit(`${BASE_URL}/login`);
	}

	visitLoggedIn() {
		cy.visit(`${BASE_URL}/secure`);
	}

	getUsername() {
		return cy.get(this.locators.usernameInput);
	}

	getPassword() {
		return cy.get(this.locators.passwordInput);
	}

	getLoginButton() {
		return cy.get(this.locators.loginButton);
	}

	getErrorSection() {
		return cy.get(this.locators.errorSection);
	}

	getLogoutButton() {
		return cy.get(this.locators.logoutButton);
	}
}

export default auth;
