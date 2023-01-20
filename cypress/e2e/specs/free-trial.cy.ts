import { LoginPage } from '../page-objects/login.page';
import { FreeTrialPage } from '../page-objects/free-trial.page';
const login = new LoginPage();
const freeTrialPage = new FreeTrialPage();

describe('Start Free Trial', () => {
    beforeEach(() => {
        cy.visit('https://app.vwo.com/#/login');
    })
    it('Verify text is present',() => {
       login.getStartFreeTrial().then((text) => {
        expect(text.text()).to.contain('Start a free trial');
       })
    });
    it.skip('Click on start free trial and create a free trial account',() => {
        login.getStartFreeTrial().click();
        freeTrialPage.enterWorkEmail('akshaysayakki@yahoo.com');
        freeTrialPage.getCreateFreeTrialButton().click();
        freeTrialPage.enterFirstName('Akshay');
        freeTrialPage.enterLastName('Tomar');
        freeTrialPage.enterNumber('9045492965');
        freeTrialPage.enterPassword('akshay_tomar30')
        freeTrialPage.getCreateFreeTrialButton().click();
     });
     it('Check if email is already registered', ()=> {
        login.getStartFreeTrial().click();
        freeTrialPage.enterWorkEmail('akshaysayakki@yahoo.com');
        freeTrialPage.getCreateFreeTrialButton().click();
        freeTrialPage.getInvalidEmail().should('contain', 'An account with this email already exists.');
     })
});