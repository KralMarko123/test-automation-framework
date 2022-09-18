import { BASE_URL } from "../constants/misc";

class frames {
	locators = {
		link: "li > a",
		topFrame: 'frame[src="/frame_top"]',
		topLeftFrame: 'frame[src="/frame_left"]',
		topMiddleFrame: 'frame[src="/frame_middle"]',
		topRightFrame: 'frame[src="/frame_right"]',
		bottomFrame: 'frame[src="/frame_bottom"]',
		iframe: "#mce_0_ifr",
	};

	visit() {
		cy.visit(`${BASE_URL}/frames`);
	}

	getFirstLink() {
		return cy.get(this.locators.link).first();
	}

	getSecondLink() {
		return cy.get(this.locators.link).last();
	}

	getBottomFrame() {
		return cy.getFrame(this.locators.bottomFrame);
	}

	getTopFrame() {
		return cy.getFrame(this.locators.topFrame);
	}

	getTopLeftFrame() {
		return cy.getFrame(this.locators.topLeftFrame);
	}

	getTopMiddleFrame() {
		return cy.getFrame(this.locators.topMiddleFrame);
	}

	getTopRightFrame() {
		return cy.getFrame(this.locators.topRightFrame);
	}

	getIFrame() {
		return cy.getFrame(this.locators.iframe);
	}
}

export default frames;
