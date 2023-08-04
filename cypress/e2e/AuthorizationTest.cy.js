import { AuthorizationPage } from "../support/AuthorizationPage";
import { phone } from "../support/variables";

describe('Authorization', () => {
    // Create AuthorizationPage class exemplar.
    const authorizationPage = new AuthorizationPage();

    beforeEach(() => {
        authorizationPage.visitAuthorizationPage()
      })

    it("Open the Authorization page", () => {
        cy.get(authorizationPage.titleSelector)
        .should('exist')
        .and('be.visible')
        .contains('Authorization ')
    });

    it("Enter the phone number", () => {
        // Add a wait time to give the page time to load.
        // cy.wait(3000);

        // cy.get() - the command to choose element by selector.
        // type() - method for entering the value.
        cy.get("#input-17").type(phone);
    });
});