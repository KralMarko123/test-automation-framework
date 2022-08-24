class sharedLayout {
	constructor() {
		this.locators = {
			logo: ".navbar-brand",
			footer: "footer",
			searchBar: ".form-control",
			submitButton: 'button[type="Submit"]',
		};
	}

	getLogo() {
		return cy.get(this.locators.logo);
	}

	getFooter() {
		return cy.get(this.locators.footer);
	}

	getSearchBar() {
		return cy.get(this.locators.searchBar);
	}

	getSubmitButton() {
		return cy.get(this.locators.submitButton);
	}
}

export default sharedLayout;
