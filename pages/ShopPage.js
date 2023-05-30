class ShopPage {
  getAlbum() {
    return cy.get('a[href="?add-to-cart=24"]');
  }
  getBeanieWithLogo() {
    return cy.get('a[href="?add-to-cart=33"]');
  }
  getBelt() {
    return cy.get('a[href="?add-to-cart=17"]');
  }
  getSunglasses() {
    return cy.get('a[href="?add-to-cart=19"]');
  }
  getTshirt() {
    return cy.get('a[href="?add-to-cart=15"]');
  }
  getToPage2() {
    return cy.get(
      'main div[class="storefront-sorting"]:nth-child(2) a[class="page-numbers"]'
    );
  }
  getViewCartBtn() {
    return cy.get('a[class="cart-contents"]');
  }
}

export default new ShopPage();
