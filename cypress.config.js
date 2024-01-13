const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:960,
  viewportWidth :1536,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  }
  
});
