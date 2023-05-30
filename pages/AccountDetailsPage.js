class AccountDetailsPage {
  getFirstname() {
    return cy.get('#account_first_name');
  }
  getLastname() {
    return cy.get("#account_last_name");
  }
  getDisplayName() {
    return cy.get("#account_display_name");
  }
  getEmailAdress() {
    return cy.get("#account_email");
  }
  getCurentPsw(){
    return cy.get("#password_current");
  }
  getNewPsw(){
    return cy.get('#password_1');
  }
  getConfirmNewPsw(){
    return cy.get('#password_2');
  }
  getSaveChangesBtn(){
    return cy.get('button[value="Save changes"]');
  }
}

export default new AccountDetailsPage();
