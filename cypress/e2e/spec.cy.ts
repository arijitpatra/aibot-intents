describe(
  "e2e tests for intents:",
  {
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
  () => {
    let intentsData;

    beforeEach(() => {
      cy.fixture("../../public/intents.json").then((data) => {
        intentsData = data;
        cy.visit("/");
      });
    });

    it("shows the loader with icon & message", () => {
      cy.contains("⌛ Loading...");
    });

    it("manually adding/removing all the intents works properly", () => {
      cy.get('[data-testid="bulkSelectionToggle"]').contains("Add all");
      cy.get('[data-testid="selectionCount"]').contains(
        `0 / ${intentsData.length} added`
      );

      intentsData.forEach((intent) => {
        cy.get(`[data-testid="cta-${intent.id}"]`).click();
      });
      cy.get('[data-testid="bulkSelectionToggle"]').contains("Remove all");
      cy.get('[data-testid="selectionCount"]').contains(
        `${intentsData.length} / ${intentsData.length} added`
      );

      intentsData.forEach((intent) => {
        cy.get(`[data-testid="cta-${intent.id}"]`).click();
      });
      cy.get('[data-testid="bulkSelectionToggle"]').contains("Add all");
      cy.get('[data-testid="selectionCount"]').contains(
        `0 / ${intentsData.length} added`
      );
    });

    it("selects all items from the bulk select 'Add All' on top", () => {
      cy.get('[data-testid="bulkSelectionToggle"]').click();
      cy.get('[data-testid="selectionCount"]').contains(
        `${intentsData.length} / ${intentsData.length} added`
      );
    });

    it("search works properly and shows the card with proper reply based on the expression", () => {
      const searchText = intentsData[2].trainingData.expressions[0].text;
      cy.get(
        'input[placeholder="🔍 Type to search for intent / expression / reply..."]'
      )
        .type(searchText)
        .should("have.value", searchText);

      cy.contains(`"${intentsData[2].reply.text}"`);
    });

    it("shows a message if search returns no result", () => {
      const searchText = "hduhje984b8n3uu93n8u39un3fhskapmzbcx93";
      cy.get(
        'input[placeholder="🔍 Type to search for intent / expression / reply..."]'
      ).type(searchText);

      cy.contains("No matching intents!");
    });
  }
);
