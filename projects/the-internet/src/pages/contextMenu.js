import { BASE_URL } from "../constants/misc";

class contextMenu {
	locators = {
		hotSpot: "#hot-spot",
	};

	visit() {
		cy.visit(`${BASE_URL}/context_menu`);
	}

	getHotspot() {
		return cy.get(this.locators.hotSpot);
	}
}

export default contextMenu;
