class ShopPage {
  getFirstName(){
    return cy.get('#billing_first_name');
  }
  getLastName(){
    return cy.get('#billing_last_name');
  }
  getSelectCountry(){
   return cy.get('#select2-billing_country-container');
    //return cy.get('#select2-billing_country-result-7s51-AF');    
  }
  getCountry(){
    return cy.get('input[class="select2-search__field"]');
  }
  getStreetAdress(){
    return cy.get('input[name="billing_address_1"]')
  }
  getCity(){
    return cy.get('#billing_city');
  }
  getCounty(){
    return cy.get('input[autocomplete="address-level1"]');
  }
  getPostcode(){
    return cy.get('input[name="billing_postcode"]');
  }
  getPhone(){
    return cy.get('input[name="billing_phone"]');
  }
  getEmail(){
    return cy.get('input[name="billing_email"]');
  }
  getPlaceOrderBtn(){
    return cy.get('#place_order');
  }
}

export default new ShopPage();
