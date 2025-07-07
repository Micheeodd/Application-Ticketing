const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'tests/e2e/**/*.cy.js',

    baseUrl: 'http://localhost:3000',
    supportFile: false
  }
});
