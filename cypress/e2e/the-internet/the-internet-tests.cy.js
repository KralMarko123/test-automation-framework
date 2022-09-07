/// <reference types="cypress" />

import addRemove from "../../../projects/the-internet/src/pages/addRemove";
import basicAuth from "../../../projects/the-internet/src/pages/basicAuth";
import brokenImages from "../../../projects/the-internet/src/pages/brokenImages";
import challengingDOM from "../../../projects/the-internet/src/pages/challengingDOM";
import checkbox from "../../../projects/the-internet/src/pages/checkbox";
import contextMenu from "../../../projects/the-internet/src/pages/contextMenu";
import disappearingElements from "../../../projects/the-internet/src/pages/disappearingElements";
import splitTest from "../../../projects/the-internet/src/pages/splitTest";
import dragAndDrop from "../../../projects/the-internet/src/pages/dragAndDrop";
import dynamicControls from "../../../projects/the-internet/src/pages/dynamicControls";
import dynamicContent from "../../../projects/the-internet/src/pages/dynamicContent";
import entryAd from "../../../projects/the-internet/src/pages/entryAd";
import dropdown from "../../../projects/the-internet/src/pages/dropdown";
import dynamicLoading from "../../../projects/the-internet/src/pages/dynamicLoading";
import fileUpload from "../../../projects/the-internet/src/pages/fileUpload";
import fileDownload from "../../../projects/the-internet/src/pages/fileDownload";

describe("The Internet Test Suite", () => {
	it("Tests split testing", () => {
		const splitTestPage = new splitTest();
		const parapgraphTextToCheck =
			"Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).";

		splitTestPage.visit();
		splitTestPage.getTitle().should("be.visible");
		splitTestPage.getParagraph().should("contain.text", parapgraphTextToCheck);
	});

	it("Tests adding/removing DOM elements", () => {
		const addRemovePage = new addRemove();

		addRemovePage.visit();
		addRemovePage.getAddButton().click();
		addRemovePage.getAddedButtons().should("be.visible").and("have.length", 1).click();
		addRemovePage.getAddedButtons().should("not.exist");
		cy.clickElementXTimes(addRemovePage.locators.addButton, 10);
		addRemovePage.getAddedButtons().should("have.length", 10);
		addRemovePage.getAddedButtons().click({ multiple: true });
		addRemovePage.getAddedButtons().should("not.exist");
	});

	it("Tests basic auth", () => {
		const basicAuthPage = new basicAuth();

		basicAuthPage.visit({
			failOnStatusCode: false,
		});
		basicAuthPage.getBody().should("contain.text", "Not authorized");
		basicAuthPage.visit({
			auth: {
				username: "admin",
				password: "admin",
			},
		});
		basicAuthPage.getTitle().should("have.text", "Basic Auth");
		basicAuthPage
			.getParagraph()
			.should("contain.text", "Congratulations! You must have the proper credentials.");
	});

	it("Tests broken images", () => {
		const brokenImagesPage = new brokenImages();

		brokenImagesPage.visit();
		brokenImagesPage.getFirstBrokenImage().then((response) => {
			expect(response.status).to.eq(404);
		});
		brokenImagesPage.getSecondBrokenImage().then((response) => {
			expect(response.status).to.eq(404);
		});
	});

	it("Tests a challenging DOM layout", () => {
		const challengingDOMPage = new challengingDOM();

		challengingDOMPage.visit();
		challengingDOMPage.getButtons().first().click();
		challengingDOMPage.getAlertButton().click();
		challengingDOMPage.getSuccessButton().click();
		for (let column of [1, 2, 3, 4, 5, 6]) {
			challengingDOMPage.getTableRowCellsAtColumn(column).each((el, index) => {
				cy.wrap(el).should("contain.text", index);
			});
		}
		challengingDOMPage.getCanvas().should("be.visible");
	});

	it("Tests checkboxes", () => {
		const checkboxPage = new checkbox();

		checkboxPage.visit();
		checkboxPage.getCheckboxes().first().should("not.be.checked");
		checkboxPage.getCheckboxes().last().should("be.checked").uncheck();
		checkboxPage.getCheckboxes().should("not.be.checked");
		checkboxPage.getCheckboxes().first().check().should("be.checked");
	});

	it("Tests the rightclick context menu", () => {
		const contextMenuPage = new contextMenu();

		contextMenuPage.visit();
		contextMenuPage.getHotspot().rightclick();
		cy.on("window:alert", (alert) => {
			expect(alert).to.contain("You selected a context menu");
		});
	});

	it("Tests a disappearing/reappearing element on page refresh", () => {
		const disappearingElementPage = new disappearingElements();

		disappearingElementPage.visit();
		disappearingElementPage.checkForElement();
		cy.reload();
		disappearingElementPage.checkForElement();
	});

	it("Tests draggable elements", () => {
		const dragAndDropPage = new dragAndDrop();
		const dataTransfer = new DataTransfer();

		dragAndDropPage.visit();
		dragAndDropPage.getColumnA().trigger("dragstart", {
			dataTransfer,
		});
		dragAndDropPage.getColumnB().trigger("drop", {
			dataTransfer,
		});
		dragAndDropPage.getColumnAHeader().should("have.text", "B");
		dragAndDropPage.getColumnBHeader().should("have.text", "A");

		// ! CYPRESS PLUGIN: CURRENTLY MISBEHAVING //
		// dragAndDropPage.getColumnB().drag(dragAndDropPage.locators.columnA);
		// dragAndDropPage.getColumnAHeader().should("have.text", "A");
		// dragAndDropPage.getColumnBHeader().should("have.text", "B");
	});

	it("Tests dynamic content", () => {
		const dynamicContentPage = new dynamicContent();
		const oldParagraphTexts = [];

		dynamicContentPage.visit();
		dynamicContentPage
			.getParagraphs()
			.each((paragraph) => {
				oldParagraphTexts.push(paragraph.text());
			})
			.then(() => {
				cy.reload();
				oldParagraphTexts.forEach((text, i) => {
					dynamicContentPage.getParagraphs().eq(i).should("not.have.text", text);
				});
			});
	});

	it("Tests dynamic controls", () => {
		const dynamicControlsPage = new dynamicControls();

		dynamicControlsPage.visit();
		dynamicControlsPage.getToggleCheckboxButton().click();
		dynamicControlsPage.getLoadingBars().should("be.visible");
		dynamicControlsPage.getCheckbox().should("not.exist");
		dynamicControlsPage.getMessages().should("have.text", "It's gone!");
		dynamicControlsPage.getLoadingBars().should("not.be.visible");
		dynamicControlsPage.getToggleCheckboxButton().click();
		dynamicControlsPage.getLoadingBars().should("be.visible");
		dynamicControlsPage.getCheckbox().should("be.visible");
		dynamicControlsPage.getMessages().should("have.text", "It's back!");
		dynamicControlsPage.getCheckbox().check().should("be.checked");
		dynamicControlsPage.getToggleInputButton().click();
		dynamicControlsPage.getLoadingBars().should("be.visible");
		dynamicControlsPage.getTextbox().should("be.enabled").type("test").should("have.value", "test");
		dynamicControlsPage.getMessages().should("have.text", "It's enabled!");
		dynamicControlsPage.getToggleInputButton().click();
		dynamicControlsPage.getLoadingBars().should("be.visible");
		dynamicControlsPage.getTextbox().should("be.disabled");
		dynamicControlsPage.getMessages().should("have.text", "It's disabled!");
	});

	it("Tests an entry ad/modal", () => {
		const entryAdPage = new entryAd();

		entryAdPage.visit();
		entryAdPage.getModal().should("be.visible");
		entryAdPage.getModalClose().click();
		entryAdPage.getModal().should("exist").and("not.be.visible");
	});

	it("Tests a dropdown element", () => {
		const dropdownPage = new dropdown();

		dropdownPage.visit();
		dropdownPage.getFirstDropdownElement().should("be.selected");
		dropdownPage.getDropdown().select("Option 1");
		dropdownPage.getSelectedElement().should("have.text", "Option 1");
		dropdownPage.getDropdown().select("Option 2");
		dropdownPage.getSelectedElement().should("have.text", "Option 2");
		dropdownPage.getDropdown().select("1");
		dropdownPage.getDropdown().should("have.value", "1");
		dropdownPage.getDropdown().select("2");
		dropdownPage.getDropdown().should("have.value", "2");
		dropdownPage.getFirstDropdownElement().should("not.be.selected");
	});

	it("Tests dynamic loading", () => {
		const dynamicLoadingPage = new dynamicLoading();

		dynamicLoadingPage.visit();
		dynamicLoadingPage.getFirstLink().click();
		dynamicLoadingPage.getFinishSection().should("not.be.visible");
		dynamicLoadingPage.getStartButton().click();
		dynamicLoadingPage.getLoadingBars().should("be.visible");
		dynamicLoadingPage.getFinishText().should("be.visible").and("have.text", "Hello World!");
		dynamicLoadingPage.visit();
		dynamicLoadingPage.getSecondLink().click();
		dynamicLoadingPage.getFinishSection().should("not.exist");
		dynamicLoadingPage.getStartButton().click();
		dynamicLoadingPage.getLoadingBars().should("be.visible");
		dynamicLoadingPage
			.getFinishText()
			.should("exist")
			.and("be.visible")
			.and("have.text", "Hello World!");
	});

	it("Tests downloading files", () => {
		const fileDownloadPage = new fileDownload();
		const downloadsFolder = Cypress.config("downloadsFolder");

		fileDownloadPage.visit();
		fileDownloadPage.getLinks().each((link) => {
			const file = link.text();
			const fileFullURL = fileDownloadPage.getFullFileURL(file);

			cy.downloadFile(fileFullURL, downloadsFolder, file);
			cy.readFile(`${downloadsFolder}\\${file}`);

			//just to try out the assertion, unfortunately asserting larger files crashes cypress
			if (file.endsWith(".txt")) {
				cy.readFile(`${downloadsFolder}\\${file}`).should("exist");
			}
		});
	});

	it("Tests file uploads", () => {
		const fileUploadPage = new fileUpload();
		const filePath = "cypress/fixtures/testData.json";

		fileUploadPage.visit();
		fileUploadPage.getBrowse().selectFile(filePath);
		fileUploadPage.getUpload().click();
		fileUploadPage.getUploadedFilesSection().should("contain.text", filePath.substring(17));
		fileUploadPage.visit();
		fileUploadPage
			.getDragAndDropSection()
			.selectFile(filePath, {
				action: "drag-drop",
			})
			.should("contain.text", filePath.substring(17));
	});
});
