/// <reference types="cypress" />

export class FreeTrialPage{
    enterWorkEmail(workEmail: string){
        cy.get('#page-v1-step1-email').type(workEmail);
    }
    getCreateFreeTrialButton() {
        return cy.get('.js-free-trial-form-step1-container button.btn-modal-form-submit');
    }
    enterFirstName(firstName: string) {
        cy.get('#page-v1-fname').type(firstName);
    }
    enterLastName(lastName: string) {
        cy.get('#page-v1-lname').type(lastName);
    }
    enterNumber(number: string) {
        cy.get('#page-v1-pnumber').type(number);
    }
    enterPassword(password: string) {
        cy.get('#page-v1-pwd').type(password);
    }
    getInvalidEmail() {
        return cy.get('.invalid-input-group div.invalid-reason');
    }

}