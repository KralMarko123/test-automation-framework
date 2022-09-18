require("cypress-downloadfile/lib/downloadFileCommand");

//Custom commands
Cypress.Commands.add("clickElementXTimes", (elementLocator, numberOfClicks) => {
	while (numberOfClicks > 0) {
		cy.get(elementLocator).click();
		numberOfClicks--;
	}
});

Cypress.Commands.add("getFrame", (frameLocator) => {
	return cy.get(frameLocator).its("0.contentDocument.body").should("not.be.empty");
});
