import { BASE_URL } from "../constants/misc";

class geolocation {
	locators = {
		whereAmIButton: 'button[onclick="getLocation()"]',
		latitude: "#lat-value",
		longitude: "#long-value",
		mapLink: "#map-link > a",
	};

	visit(latitude, longitude) {
		cy.visit(`${BASE_URL}/geolocation`, {
			onBeforeLoad: (win) => {
				this.mockGeolocation(win, latitude, longitude);
			},
		});
	}

	getWhereAmIButton() {
		return cy.get(this.locators.whereAmIButton);
	}

	getLatitude() {
		return cy.get(this.locators.latitude);
	}

	getLongitude() {
		return cy.get(this.locators.longitude);
	}

	getMapLink() {
		return cy.get(this.locators.mapLink);
	}

	mockGeolocation = (win, latitude, longitude) => {
		cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb, err) => {
			if (latitude && longitude) {
				return cb({ coords: { latitude, longitude } });
			}

			throw err({ code: 1 });
		});
	};
}

export default geolocation;
