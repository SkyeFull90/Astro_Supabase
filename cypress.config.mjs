import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'vis7mo',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4321",
  },
});
