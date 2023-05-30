// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// un framework cu POM, acoperind urmatoarele scenario
// - register test cu faker
// - try to register test using existing email (validare pe mesajul de eroare ca exista deja email-ul)
// - register+edit password and account details in acelasi test (e un link de dupa register), 
// aici puneti detalii si submit cu asertie pe mesajul de validare
// -  add product to cart (flux complet pana la plasarea comenzii). 
// Cand terminate, dati push in GitHub si atasati va rog link-ul in acelasi doc cu tema (unde ati pus proiectele de pactumjs in trecut).