import { BASE_URL } from "../constants/misc";

class dynamicLoading {
	locators = {
		firstLink: 'a[href="/dynamic_loading/1"]',
		secondLink: 'a[href="/dynamic_loading/2"]',
		loadingBar: "img[src='/img/ajax-loader.gif']",
		start: "#start",
		startButton: `#start button`,
		finish: "#finish",
		finishText: `#finish h4`,
	};

	visit() {
		cy.visit(`${BASE_URL}/dynamic_loading`);
	}

	getFirstLink() {
		return cy.get(this.locators.firstLink).first();
	}

	getSecondLink() {
		return cy.get(this.locators.secondLink).last();
	}

	getLoadingBars() {
		return cy.get(this.locators.loadingBar);
	}

	getStartSection() {
		return cy.get(this.locators.start);
	}

	getStartButton() {
		return cy.get(this.locators.startButton);
	}

	getFinishSection() {
		return cy.get(this.locators.finish);
	}

	getFinishText() {
		return cy.get(this.locators.finishText);
	}
}

export default dynamicLoading;
