import { BASE_URL } from "../constants/misc";

class floatingMenu {
	locators = {
		menu: "#menu",
    footer: '#page-footer'
	};

	visit() {
		cy.visit(`${BASE_URL}/floating_menu`);
	}

	getMenu() {
		return cy.get(this.locators.menu);
	}

  scrollToBottom(){
    cy.get(this.locators.footer).scrollIntoView()
  }
}

export default floatingMenu;
