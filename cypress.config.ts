import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.zbrojownia.pl",
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});