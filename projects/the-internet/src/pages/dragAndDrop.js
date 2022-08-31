import { BASE_URL } from "../constants/misc";

class dragAndDrop {
	locators = {
		columnA: "#column-a",
		columnB: "#column-b",
		header: "header",
	};

	visit() {
		cy.visit(`${BASE_URL}/drag_and_drop`);
	}

	getColumnA() {
		return cy.get(this.locators.columnA);
	}

	getColumnB() {
		return cy.get(this.locators.columnB);
	}

	getColumnAHeader() {
		return this.getColumnA().find(this.locators.header);
	}

	getColumnBHeader() {
		return this.getColumnB().find(this.locators.header);
	}
}

export default dragAndDrop;
