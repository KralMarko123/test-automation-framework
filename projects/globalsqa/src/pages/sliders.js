import { BASE_URL } from "../constants/misc";

class sliders {
	constructor() {
		this.locators = {
			colorPickerTab: 'li[id="Color Picker"]',
			rangeTab: "#Range",
			stepsTab: "#Steps",
			redBar: "#red",
			greenBar: "#green",
			blueBar: "#blue",
			frame: ".demo-frame",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/sliders`);
	}

	clickColorPickerTab() {
		return cy.get(this.locators.colorPickerTab).click();
	}

	clickRangeTab() {
		return cy.get(this.locators.rangeTab).click();
	}

	clickStepsTab() {
		return cy.get(this.locators.stepsTab).click();
	}

	getFrameWidget() {
		return cy.get(this.locators.frame);
	}

	getRedBarSlider() {
		return cy.get(this.locators.redBar).find("span");
	}

	getGreenBarSlider() {
		return cy.get(this.locators.greenBar).find("span");
	}

	getBlueBarSlider() {
		return cy.get(this.locators.blueBar).find("span");
	}
}

export default sliders;
