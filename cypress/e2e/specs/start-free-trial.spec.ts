import { LoginPage } from '../page-objects/login.page';
const login = new LoginPage();

describe('Google Navigation', () => {
    it('Google Search',() => {
        cy.visit('');

        login.googleSearch().type('Something');
        login.googleSearchBtn().click({ force: true });
        login.searchResults().should('be.visible');
    });
});