/// <reference types="cypress" />

export class LoginPage {
    getStartFreeTrial() {
        return cy.get('#js-login-form .text-link');
    }
    enterEmailAddress(email: string) {
        cy.get('#js-login-wrap #login-username').type(email);
    }
    enterPassword(password: string) {
        cy.get('#js-login-wrap #login-password').type(password);
    }
    getSignInButton() {
        return cy.get('#js-login-wrap #js-login-btn');
    }
}