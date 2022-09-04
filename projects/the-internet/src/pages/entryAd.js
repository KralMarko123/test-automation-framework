import { BASE_URL } from "../constants/misc";

class entryAd {
	locators = {
		restartLink: "#restart-ad",
		modal: ".modal",
		modalClose: ".modal-footer > p",
	};

	visit() {
		cy.visit(`${BASE_URL}/entry_ad`);
	}

	getRestartLink() {
		return cy.get(this.locators.restartLink);
	}

	getModal() {
		return cy.get(this.locators.modal);
	}

	getModalClose() {
		return cy.get(this.locators.modalClose);
	}
}

export default entryAd;
