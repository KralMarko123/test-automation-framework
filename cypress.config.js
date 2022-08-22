const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 20000,
  defaultCommandTimeout: 15000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
