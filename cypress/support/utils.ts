import { HypothesesPage } from '../e2e/page-objects/hypothesis.page';
const hypothesesPage = new HypothesesPage();
export function createHypotheses(expect:string, address:string, score:number, label:string) {
    cy.wait(7000);
    hypothesesPage.getCreateHypothesesButton().click({force:true});
    hypothesesPage.enterExpectThat(expect);
    hypothesesPage.enterWillAddress(address);
    hypothesesPage.enterScore(score);
    hypothesesPage.enterLabel(label);
    hypothesesPage.getCreateButton().click({force:true});
 }