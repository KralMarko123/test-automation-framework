const { defineConfig } = require("cypress");

module.exports = defineConfig({
	pageLoadTimeout: 20000,
	defaultCommandTimeout: 20000,
	redirectionLimit: 50,
	failOnStatusCode: false,

	env: {
		maxNumberOfIterations: 100,
	},

	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},

		experimentalSessionAndOrigin: true,
	},
});
