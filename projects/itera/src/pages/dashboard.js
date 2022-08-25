import { BASE_URL } from "../constants/misc";

class dashboard {
	constructor() {
		this.locators = {
			title: "h1",
			subtitle: "h3",
			createNewCustomerButton: 'a[href="/Customer/Create"]',
			searchInput: "#searching",
			searchButton: 'input[type="submit"]',
			deleteButton: ".btn-outline-danger",
			detailsButton: ".btn-outline-info",
			editButton: '.btn-outline-primary',
			tableRow: "tr",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/Dashboard`);
	}

	getTitle() {
		return cy.get(this.locators.title);
	}

	getSubtitle() {
		return cy.get(this.locators.subtitle);
	}

	getCreateCustomerButton() {
		return cy.get(this.locators.createNewCustomerButton);
	}

	getSearchBar() {
		return cy.get(this.locators.searchInput);
	}

	getSubmitSearchButton() {
		return cy.get(this.locators.searchButton);
	}

	getRows() {
		return cy.get(this.locators.tableRow);
	}
}

export default dashboard;
