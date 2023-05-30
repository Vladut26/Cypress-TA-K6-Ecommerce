/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import TopSideMenuPage from "../../pages/TopSideMenuPage";
import RegisterPage from "../../pages/RegisterPage";
import AccountLeftSidePage from "../../pages/AccountLeftSidePage";
import AccountDetailsPage from "../../pages/AccountDetailsPage";

describe("Register k6 test suite", () => {
  
  const randomEmail = faker.internet.email();
  it("Register new user test", () => {
    TopSideMenuPage.getMyAccount().click();
    RegisterPage.getMyEmail().type(randomEmail);
    RegisterPage.getRegisterBtn().click();
    cy.contains("From your account dashboard you can view your recent orders").should("be.visible");
  });

  it("Try to register with an existing account test", () => {
    TopSideMenuPage.getMyAccount().click();
    RegisterPage.getMyEmail().type(randomEmail);
    RegisterPage.getRegisterBtn().click();
    cy.contains("An account is already registered with your email address.").should("be.visible");
  });

  it("Register and edit account details test", () => {
    const newRandomEmail = faker.internet.email();
    TopSideMenuPage.getMyAccount().click();
    RegisterPage.getMyEmail().type(newRandomEmail);
    RegisterPage.getRegisterBtn().click();
    cy.contains("From your account dashboard you can view your recent orders").should("be.visible");
    AccountLeftSidePage.getMyAccountDetails().click();
    AccountDetailsPage.getFirstname().type(faker.person.firstName());
    AccountDetailsPage.getLastname().type(faker.person.lastName());
    AccountDetailsPage.getDisplayName().type(faker.person.firstName());
    AccountDetailsPage.getSaveChangesBtn().click();
    cy.contains("Account details changed successfully.").should('be.visible');
  });

  it("Register and try to change password test", () => {
    const newPsw=faker.internet.password();
    const newRandomEmail = faker.internet.email();
    TopSideMenuPage.getMyAccount().click();
    RegisterPage.getMyEmail().type(newRandomEmail);
    RegisterPage.getRegisterBtn().click();
    cy.contains("From your account dashboard you can view your recent orders").should("be.visible");
    AccountLeftSidePage.getMyAccountDetails().click();
    AccountDetailsPage.getCurentPsw().type(faker.internet.password());
    AccountDetailsPage.getNewPsw().type(newPsw);
    AccountDetailsPage.getConfirmNewPsw().type(newPsw);
    AccountDetailsPage.getSaveChangesBtn().click();
    cy.contains("Your current password is incorrect.").should('be.visible');
  });

});
