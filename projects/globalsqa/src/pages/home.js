import { BASE_URL } from "../constants/misc";

class home {
	constructor() {
		this.locators = {};
	}

	visit() {
		cy.visit(`${BASE_URL}`);
	}
}

export default home;
