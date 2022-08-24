class detailsCustomer {
	constructor() {
		this.locators = {
			title: "h2",
			editButton: ".btn-outline-primary",
			backToListLink: 'a[href="/Dashboard"]',
			attributeValue: "dl dd:nth-of-type",
		};
	}

	getTitle() {
		return cy.get(this.locators.title);
	}

	getEditButton() {
		return cy.get(this.locators.editButton);
	}

	getBackToListLink() {
		return cy.get(this.locators.backToListLink);
	}

	getName() {
		return cy.get(`${this.locators.attributeValue}(1)`);
	}

	getCompany() {
		return cy.get(`${this.locators.attributeValue}(2)`);
	}

	getAddress() {
		return cy.get(`${this.locators.attributeValue}(3)`);
	}

	getCity() {
		return cy.get(`${this.locators.attributeValue}(4)`);
	}

	getPhone() {
		return cy.get(`${this.locators.attributeValue}(5)`);
	}

	getEmail() {
		return cy.get(`${this.locators.attributeValue}(6)`);
	}
}

export default detailsCustomer;
