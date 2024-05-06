describe(
  "e2e tests for intents:",
  {
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  () => {
    let intentsData;

    beforeEach(() => {
      // cy.visit("/");
      cy.fixture("../../public/intents.json").then((data) => {
        intentsData = data;
        cy.visit("/");
      });
    });

    it("successfully loads", () => {});

    it("shows the loader", () => {
      cy.contains("⌛ Loading...");
    });

    it("manually adding/removing all the intents", () => {
      cy.get('[data-testid="bulkSelection"]').contains("Add all");
      cy.get('[data-testid="bulkSelectionCount"]').contains(
        `0 / ${intentsData.length} added`
      );
      cy.get("button").click({ multiple: true });
      cy.get('[data-testid="bulkSelection"]').contains("Remove all");
      cy.get('[data-testid="bulkSelectionCount"]').contains(
        `${intentsData.length} / ${intentsData.length} added`
      );
      cy.get("button").click({ multiple: true });
      cy.get('[data-testid="bulkSelection"]').contains("Add all");
      cy.get('[data-testid="bulkSelectionCount"]').contains(
        `0 / ${intentsData.length} added`
      );
    });

    it("search for an intent name", () => {
      const searchText = intentsData[2].trainingData.expressions[2].text;
      cy.get('input[type="search"]')
        .type(searchText)
        .should("have.value", searchText);

      cy.contains(intentsData[2].name);
    });

    it("selects all items from the bulk select 'Add All' on top", () => {
      cy.get('[data-testid="bulkSelection"]').click();
      cy.get('[data-testid="bulkSelectionCount"]').contains(
        `${intentsData.length} / ${intentsData.length} added`
      );
    });
  }
);
