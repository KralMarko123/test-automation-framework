import { BASE_URL } from "../constants/misc";

class home {
	constructor() {
		this.locators = {
			main: ".jumbotron",
		};
	}

	visit() {
		cy.visit(BASE_URL);
	}

	getMain() {
		return cy.get(this.locators.main);
	}
}

export default home;
