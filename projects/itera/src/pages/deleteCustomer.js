class deleteCustomer {
	constructor() {
		this.locators = {
			title: "h2",
			deleteButton: ".btn-outline-danger",
			backToListLink: 'a[href="/Dashboard"]',
		};
	}

	getTitle() {
		return cy.get(this.locators.title);
	}

	getDeleteButton() {
		return cy.get(this.locators.deleteButton);
	}

	getBackToListLink() {
		return cy.get(this.locators.backToListLink);
	}
}

export default deleteCustomer;
