import { BASE_URL } from "../constants/misc";

class infiniteScroll {
  locators = {
    profileInfo: ".figcaption",
    viewProfileLink: "#content > div a",
    pageNotFound: "body > h1"
  };

  visit() {
    cy.visit(`${BASE_URL}/infinite_scroll`);
  }


}

export default infiniteScroll;