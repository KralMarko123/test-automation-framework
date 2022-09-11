import { BASE_URL } from "../constants/misc";

class hovers {
  locators = {
    profileInfo: ".figcaption",
    viewProfileLink: "#content > div a",
    pageNotFound: "body > h1"
  };

  visit() {
    cy.visit(`${BASE_URL}/hovers`);
  }

  getProfileInfo(i) {
    return cy.get(this.locators.profileInfo).eq(i);
  }

  getViewProfileLink(i)
  {
    return cy.get(this.locators.viewProfileLink).eq(i);
  }

  getNotFoundtitle()
  {
    return cy.get(this.locators.pageNotFound);
  }


}

export default hovers;