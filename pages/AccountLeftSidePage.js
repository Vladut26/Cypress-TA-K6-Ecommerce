class AccountLeftSidePage {
    getMyAccountDetails() {
      return cy.contains("Account details");
    }
  }
  
  export default new AccountLeftSidePage();
  