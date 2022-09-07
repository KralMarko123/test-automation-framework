require("@4tw/cypress-drag-drop");
require("cypress-downloadfile/lib/downloadFileCommand");

//Custom commands
Cypress.Commands.add("clickElementXTimes", (elementLocator, numberOfClicks) => {
	while (numberOfClicks > 0) {
		cy.get(elementLocator).click();
		numberOfClicks--;
	}
});
