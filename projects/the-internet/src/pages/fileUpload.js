import { BASE_URL } from "../constants/misc";

class fileUpload {
	constructor() {
		this.locators = {
			browseFilesButton: "#file-upload",
			uploadButton: "#file-submit",
			uploadedFilesSection: "#uploaded-files",
			dragAndDropSection: "#drag-drop-upload",
		};
	}

	visit() {
		cy.visit(`${BASE_URL}/upload`);
	}

	getBrowse() {
		return cy.get(this.locators.browseFilesButton);
	}

	getUpload() {
		return cy.get(this.locators.uploadButton);
	}

	getUploadedFilesSection() {
		return cy.get(this.locators.uploadedFilesSection);
	}

	getDragAndDropSection() {
		return cy.get(this.locators.dragAndDropSection);
	}
}

export default fileUpload;
