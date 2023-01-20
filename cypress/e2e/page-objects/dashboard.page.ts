/// <reference types="cypress" />

export class DashboardPage {
    getPageHeading() {
        return cy.get('h1.page-heading');
    }
    getSideNavList() {
        return cy.get('li.navbar-group');
    }
    getSubNavList() {
        return cy.get('.navbar-sub-group > li span');
    }
}