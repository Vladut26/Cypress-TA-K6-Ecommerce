class RegisterPage {
  getMyEmail() {
    return cy.get('#reg_email');
  }
  getRegisterBtn(){
    return cy.get('button[name="register"]');
  }
}

export default new RegisterPage();
