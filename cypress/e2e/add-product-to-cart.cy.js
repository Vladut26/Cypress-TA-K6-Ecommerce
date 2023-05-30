/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import ShopPage from "../../pages/ShopPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";

describe("Add products to cart test suite", () => {
  it("Add to cart test", () => {
    ShopPage.getAlbum().click();
    ShopPage.getBeanieWithLogo().click();
    ShopPage.getBelt().click();
    ShopPage.getToPage2().click();
    ShopPage.getSunglasses().click();
    ShopPage.getTshirt().click();
    cy.wait(3000);
    ShopPage.getViewCartBtn().click();
    CartPage.getCheckoutButton().click();
    CheckoutPage.getFirstName().type(faker.person.firstName());
    CheckoutPage.getLastName().type(faker.person.lastName());
    CheckoutPage.getSelectCountry().click();
    CheckoutPage.getCountry().type("Portugal").type('{enter}');
    CheckoutPage.getStreetAdress().type(faker.location.street())
    CheckoutPage.getCity().type(faker.location.city());
    CheckoutPage.getPostcode().type('1950-044');
    CheckoutPage.getPhone().type(faker.phone.number('+351-2##-###-###'));
    CheckoutPage.getEmail().clear().type(faker.internet.email());
    CheckoutPage.getPlaceOrderBtn().click();
    cy.contains('Thank you. Your order has been received.').should('be.visible');
  });
});
