import { BASE_URL } from "../constants/misc";

class horizontalSlider {
	locators = {
		slider: 'input[type="range"]',
		sliderLabel: "#range",
	};

	visit() {
		cy.visit(`${BASE_URL}/horizontal_slider`);
	}

	getSlider() {
		return cy.get(this.locators.slider);
	}

	getSliderLabel() {
		return cy.get(this.locators.sliderLabel);
	}
}

export default horizontalSlider;
