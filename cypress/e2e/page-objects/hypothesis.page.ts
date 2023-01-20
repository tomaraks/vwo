/// <reference types="cypress" />

export class HypothesesPage {
    getCreateHypothesesButton() {
        return cy.get('.btn--primary.btn--big');
    }
    enterExpectThat(expect: string) {
        cy.get('#create-hypothesis-solution').should('be.enabled').type(expect);
    }
    enterWillAddress(address: string) {
        cy.get('#create-hypothesis-problem').type(address);
    }
    enterScore(score: number) {
        cy.get('ul.score-box li').eq(score).click();
    }
    enterLabel(label: string) {
        cy.get('span .chosen-container-multi ul li.search-field input').last().click({ force: true }).type(label).type('{enter}');
    }
    getCreateButton() {
        return cy.get('.modal-footer button span');
    }
    getView() {
        return cy.get('.tabs-menu-item > a');
    }
    searchHypotheses(hypotheses: string) {
        cy.get('.border--bottom input.ng-valid').eq(0).type(hypotheses);
    }
    clearHypotheses() {
        cy.get('.border--bottom input.ng-valid').eq(0).clear();
    }
    getSummary() {
        return cy.get('ul#js-plan-hypothesis-list > li.tile p');
    }
    selectSortBy(option: string) {
        cy.get('selected-value-slot.select-box-selected').click();
        cy.get('option-slot.select-box-option').contains(option).click();
    }
    getScores() {
        return cy.get('ul#js-plan-hypothesis-list > li.tile .pie >text');
    }
    selectState(state: string) {
        let key = 0;
        switch (state) {
            case 'Backlog':
                key = 1;
                break;
            case 'Selected For Testing':
                key = 2;
                break;
            case 'Testing':
                key = 3;
                break;
            case 'Completed':
                key = 4;
                break;
            case 'Archive':
                key = 5;
                break;
            default:
                break;
        }
        cy.get('.border--bottom input.ng-valid').eq(key).click();
    }
    clearFilters() {
        cy.get('button.btn--primary').contains('Clear').click();
    }
    filterByLabel(label: string) {
        cy.get('.border--bottom li > input').type(label);
        cy.get('.border--bottom .chosen-drop').type(label);
    }
    clearFilterByLabel() {
        cy.get('.search-choice-close').click();
    }
    getAllCheckBoxes() {
        return cy.get('#js-plan-hypothesis-list > li > div > input');
    }
    getDelete() {
        return cy.get('button.btn--negative svg');
    }
    selectDeleteOption(option: string) {
        cy.get('.modal-content button').contains(option).click();
    }
    logout() {
        cy.get('button.icon-button img').click();
        cy.get('.open ul > li.dropdown-menu-list-item').contains('Logout').click();
    }
}