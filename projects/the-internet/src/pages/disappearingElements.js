import { BASE_URL } from "../constants/misc";

class disappearingElements {
	locators = {
		buttons: "ul li a",
		disappearingElement: 'a[href="/gallery/"]',
	};

	visit() {
		cy.visit(`${BASE_URL}/disappearing_elements`);
	}

	getButtons() {
		return cy.get(this.locators.buttons);
	}

	getDisappearingElement() {
		return cy.get(this.locators.disappearingElement);
	}

	checkForElement() {
		this.getButtons().then((buttons) => {
			buttons.length < 5
				? this.getDisappearingElement().should("not.exist")
				: this.getDisappearingElement().should("be.visible");
		});
	}
}

export default disappearingElements;
