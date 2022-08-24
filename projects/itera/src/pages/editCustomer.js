class editCustomer {
	constructor() {
		this.locators = {
			title: "h2",
			editCustomerForm: 'form[novalidate="novalidate"]',
			nameInput: "#Name",
			companyInput: "#Company",
			addressInput: "#Address",
			cityInput: "#City",
			phoneInput: "#Phone",
			emailInput: "#Email",
			saveCustomerButton: 'input[value="Save"]',
			backToListLink: 'a[href="/Dashboard"]',
		};
	}

	getTitle() {
		return cy.get(this.locators.title);
	}

	getEditCustomerForm() {
		return cy.get(this.locators.editCustomerForm);
	}

	getName() {
		return cy.get(this.locators.nameInput);
	}

	getCompany() {
		return cy.get(this.locators.companyInput);
	}

	getAddress() {
		return cy.get(this.locators.addressInput);
	}

	getCity() {
		return cy.get(this.locators.cityInput);
	}

	getPhone() {
		return cy.get(this.locators.phoneInput);
	}

	getEmail() {
		return cy.get(this.locators.emailInput);
	}

	getSaveCustomerButton() {
		return cy.get(this.locators.saveCustomerButton);
	}

	getBackToListLink() {
		return cy.get(this.locators.backToListLink);
	}

	fillInInputs(name, company, address, city, phone, email) {
		this.getName().type(name);
		this.getCompany().type(company);
		this.getAddress().type(address);
		this.getCity().type(city);
		this.getPhone().type(phone);
		this.getEmail().type(email);
	}
}

export default editCustomer;
