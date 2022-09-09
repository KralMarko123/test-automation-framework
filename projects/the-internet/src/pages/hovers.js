import { BASE_URL } from "../constants/misc";

class hovers {
  locators = {
    profileInfo: ".figcaption",
    viewProfileButton: "#content > div a"
  };
  visit() {
    cy.visit(`${BASE_URL}/hovers`);
  }


  getProfileInfo() {
    return cy.get(this.locators.profileInfo);
  }

  getViewProfileButton()
  {
    return cy.get(this.locators.viewProfileButton);
  }
}

export default hovers;
