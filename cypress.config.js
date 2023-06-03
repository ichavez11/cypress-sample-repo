const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://jupiter.cloud.planittesting.com',
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
  },
});
