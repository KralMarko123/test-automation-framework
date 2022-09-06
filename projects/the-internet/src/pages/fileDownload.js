import { BASE_URL } from "../constants/misc";

class fileDownload {
	locators = {
		link: ".example a",
	};

	visit() {
		cy.visit(`${BASE_URL}/download`);
	}

	getLinks() {
		return cy.get(this.locators.link);
	}

	getFullFileURL(file) {
		return `${BASE_URL}/download/${file}`;
	}
}

export default fileDownload;
