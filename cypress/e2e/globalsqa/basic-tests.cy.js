/// <reference types="cypress" />

import sliders from "../../../projects/globalsqa/src/pages/sliders";

describe("Beginner GlobalSQA tests", () => {
	it("Tests sliders", () => {
		const slidersPage = new sliders();

		slidersPage.visit();
		slidersPage.clickColorPickerTab();

		slidersPage.getFrameWidget().within(() => {
			slidersPage
				.getRedBarSlider()
				.trigger("mousedown", "right")
				.trigger("mousemove", { which: 1, pageX: 50 })
				.trigger("mouseup");
		});
	});
});
