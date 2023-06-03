const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/report',
    reportFilename: "test-result.html",
    charts: true,
    reportPageTitle: 'test-results',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: true,
    videoOnFailOnly: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'http://jupiter.cloud.planittesting.com',
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    video: false,
  },
});
