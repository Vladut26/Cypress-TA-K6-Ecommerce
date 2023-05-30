class ShopPage {
  getCheckoutButton() {
    return cy.get('a[class="checkout-button button alt wc-forward"]');
  }
}

export default new ShopPage();
