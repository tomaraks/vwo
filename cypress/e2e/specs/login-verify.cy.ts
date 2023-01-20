import { LoginPage } from '../page-objects/login.page';
import { DashboardPage } from '../page-objects/dashboard.page';
import { HypothesesPage } from '../page-objects/hypothesis.page';
import { createHypotheses } from '../../support/utils';
const hypothesesPage = new HypothesesPage();
const login = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login and verification', () => {
    beforeEach(() => {
        cy.visit('https://app.vwo.com/#/login');
    })
    it('Login and verify dashboard', () => {
        login.enterEmailAddress('akshaysayakki@yahoo.com');
        login.enterPassword('Akshay_tomar30');
        login.getSignInButton().click();
        cy.url().should('contain', 'dashboard');
        dashboardPage.getPageHeading().should('contain', 'Dashboard');
        let listOfSideNavItems = ["Testing", "Insights", "Personalize", "Deploy", "Data360", "Plan", "Configurations", "Services", "Updates"];
        for (let list of listOfSideNavItems) {
            dashboardPage.getSideNavList().should('contain', list);
        }
        dashboardPage.getSideNavList().contains('Plan').click();
        dashboardPage.getSubNavList().contains('Hypotheses').click();
        dashboardPage.getPageHeading().should('contain', 'Hypotheses');

        createHypotheses('Expect' + 1, 'Address' + 1, 1, 'Label' + 1);
        createHypotheses('Expect' + 2, 'Address' + 2, 2, 'Label' + 2);
        createHypotheses('Expect' + 3, 'Address' + 3, 3, 'Label' + 3);

        hypothesesPage.getView().contains('List View').click();
        cy.wait(2000);
        hypothesesPage.searchHypotheses('Expect2');
        hypothesesPage.getSummary().should('have.length.greaterThan', 0);
        hypothesesPage.getSummary().should('contain', 'Expect2');
        hypothesesPage.clearHypotheses();
        hypothesesPage.selectSortBy('Score');
        let scores: any = [];
        hypothesesPage.getScores().each((ele, i) => {
            scores[i] = ele.text();
        });

        for(let i = 1; i<scores.length; i++) {
            cy.wrap(scores[0]).should('be.gte', scores[i]);
        }

        hypothesesPage.selectState('Backlog');
        hypothesesPage.getSummary().should('have.length.greaterThan', 0);
        hypothesesPage.clearFilters();

        hypothesesPage.selectState('Testing');
        hypothesesPage.getSummary().should('have.length', 0);
        hypothesesPage.clearFilters();

        hypothesesPage.filterByLabel('Label2');
        hypothesesPage.getSummary().should('have.length.greaterThan', 0);
        hypothesesPage.clearFilterByLabel();

        hypothesesPage.getAllCheckBoxes().each(($ele) => {
            cy.wrap($ele).click({force:true});
        })

        hypothesesPage.getDelete().click();
        hypothesesPage.selectDeleteOption('OK');
        hypothesesPage.logout();
    })


})