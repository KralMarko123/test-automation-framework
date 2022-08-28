import { BASE_URL } from "../constants/misc";

class brokenImages {
	constructor() {
		this.locators = {
			image: "img",
		};

		this.assets = {
			brokenImageOne: `${BASE_URL}/asdf.jpg`,
			brokenImageTwo: `${BASE_URL}/hjkl.jpg`,
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/broken_images`);
	}

	getImages() {
		return cy.get(this.locators.image);
	}

	getFirstBrokenImage() {
		return cy
			.request({ method: "GET", url: this.assets.brokenImageOne, failOnStatusCode: false })
			.then((response) => {
				return response;
			});
	}

	getSecondBrokenImage() {
		return cy
			.request({ method: "GET", url: this.assets.brokenImageTwo, failOnStatusCode: false })
			.then((response) => {
				return response;
			});
	}
}

export default brokenImages;
