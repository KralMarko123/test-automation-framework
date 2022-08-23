/// <reference types="cypress" />

import testAutomation from "../../../projects/itera/src/pages/testAutomation";
import testData from "../../fixtures/testData.json";

// this is an example suite covering the predefined scenarios given on https://itera-qa.azurewebsites.net/home/practice
describe("Practice test suite", () => {
  it("Textarea practice", () => {
    const testAutomationPage = new testAutomation();

    testAutomationPage.visit();
    testAutomationPage.fillInFirstCard(
      testData.name,
      testData.phone,
      testData.email,
      testData.password,
      testData.address
    );
    testAutomationPage.getSubmitButton().click();
  });

  it("Checkbox & Radio button practice", () => {
    const testAutomationPage = new testAutomation();

    testAutomationPage.visit();
    testAutomationPage
      .getRadioButtons()
      .check(["option1", "option2", "option3"], { force: true });
    testAutomationPage.getFemaleRadio().check().should("be.checked");
    testAutomationPage
      .getCheckboxWithId("tuesday")
      .check()
      .should("be.checked");
    testAutomationPage.getCheckboxWithId("friday").check().should("be.checked");
  });

  it("Dropdown practice", () => {
    const testAutomationPage = new testAutomation();
    let count = 10;

    testAutomationPage.visit();
    while (count > 0) {
      testAutomationPage
        .getDropdown()
        .select(count)
        .should("have.value", count);
      count--;
    }
    testAutomationPage.getDropdown().select("Norway").should("have.value", 1);
  });

  it("Xpath practice", () => {
    const testAutomationPage = new testAutomation();

    testAutomationPage.visit();
    testAutomationPage
      .getElementByXpath("/html/body/div/div[5]/div[2]/div[1]/div[2]/input")
      .check({
        force: true,
      })
      .should("be.checked");
    testAutomationPage
      .getElementByXpath("/html/body/div/div[5]/div[2]/div[2]/div[1]/input")
      .check({ force: true })
      .should("be.checked");
    testAutomationPage
      .getElementByXpath("/html/body/div/div[5]/div[2]/div[2]/div[3]/input")
      .check({ force: true })
      .should("be.checked");
    testAutomationPage
      .getCheckboxWithId("customCheck7")
      .should("be.disabled")
      .check({ force: true })
      .should("be.checked");
  });
});
