import { BASE_URL } from "../constants/misc";

class infiniteScroll {
	locators = {
		infiniteScrollText: ".jscroll-added",
		placeholderText: "small",
		infiniteScrollChild: ".jscroll-inner >",
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

	getInfiniteScrollChild() {
		return cy.get(this.locators.infiniteScrollChild);
	}
}

export default infiniteScroll;
