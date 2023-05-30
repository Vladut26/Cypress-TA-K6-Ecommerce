const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  pageLoadTimeout: 15000,
  projectId: "rvm15o",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
