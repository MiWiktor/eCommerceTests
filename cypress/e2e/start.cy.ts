
/// <reference types="cypress" />

describe('Sprawdzenie strony głównej', () => {
  it('Strona powinna się załadować poprawnie', () => {
    cy.visit('https://www.zbrojownia.pl/'); 
    cy.get('a.user').should('be.visible');
  });
});