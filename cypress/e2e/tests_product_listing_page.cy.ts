/// <reference types="cypress" />

import { zbrojowniaProductCatalogPage } from '../support/page_objects/zbrojowniaProductListingPage';

// Suppress the ResizeObserver loop error
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    return false; // prevent Cypress from failing the test
  }
  return true;
});

describe('Zbrojownia Product Catalog Page Tests', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.get('div.bottom-cookie-info').then(($element) => {
      if ($element.is(':visible')) {
        cy.get('button#cksAcceptAll').click();
      }
      cy.visit('https://www.zbrojownia.pl/promocje-5-90');
    });
  });
  
 

  it('should display the product listing', () => {
    zbrojowniaProductCatalogPage.verifyProductListingIsVisible();
  });

  it('should verify the product listing is not empty', () => {
    zbrojowniaProductCatalogPage.verifyProductListingIsNotEmpty();
    zbrojowniaProductCatalogPage.countProductBoxes().should('eq', 24);
    
  });

  it('should verify the filter category list is not empty', () => {
    zbrojowniaProductCatalogPage.verifyFilterCategoryListIsNotEmpty('Kategoria','HIGIENA',true);
  });


});
