import { BASE_URL } from "../constants/misc";

class infiniteScroll {
	locators = {
		infiniteScrollText: ".jscroll-added",
		placeholderText: "small"
	};

	visit() {
		cy.visit(`${BASE_URL}/infinite_scroll`);
	}

	getInfiniteText() {
		return cy.get(this.locators.infiniteScrollText);
	}

	getPlaceholderText() {
		return cy.get(this.locators.placeholderText);
	}

	getInfiniteScrollChild(i) {
		return cy.get (`.jscroll-inner > :nth-child(${i})`);
	}
}

export default infiniteScroll;
