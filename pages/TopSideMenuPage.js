class TopSideMenuPage {
  getMyAccount() {
    return cy.contains("My account");
  }
}

export default new TopSideMenuPage();
