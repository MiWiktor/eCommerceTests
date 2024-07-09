interface SelectorOption {
  selector: string;
}

interface ProductCatalogElements {
  productListing: string;
  productBox: string;
  filter: string;
  customSelect: string;
  optionsSibling: string;
  ulElement: string;
  
}

export const zbrojowniaProductCatalogSelectors = {
  PRODUCT_LISTING: '.custom_listing.listing',
  PRODUCT_BOX: '.product-box  ',
  FILTER: '#filter',
  CUSTOM_SELECT: '.custom_select',
  OPTIONS_SIBLING: '.options',
  UL_ELEMENT: 'ul',
  
};

class ZbrojowniaProductCatalogPage {
  elements: ProductCatalogElements;

  constructor() {
      this.elements = {
      productListing: zbrojowniaProductCatalogSelectors.PRODUCT_LISTING,
      productBox: zbrojowniaProductCatalogSelectors.PRODUCT_BOX,
      filter: zbrojowniaProductCatalogSelectors.FILTER,
      customSelect: zbrojowniaProductCatalogSelectors.CUSTOM_SELECT,
      optionsSibling: zbrojowniaProductCatalogSelectors.OPTIONS_SIBLING,
      ulElement: zbrojowniaProductCatalogSelectors.UL_ELEMENT,
      
      }
  }

  verifyProductListingIsVisible() {
    cy.get(this.elements.productListing).should('be.visible');
  }

  verifyProductListingIsNotEmpty() {
    cy.get(this.elements.productListing).find(this.elements.productBox).its('length').should('be.gt', 0);
  }

  countProductBoxes() {
    return cy.get(this.elements.productListing).find(this.elements.productBox).its('length');
  }

  verifyFilterCategoryListIsNotEmpty(category: string, selection: string, verifyReload: boolean = false) {
    cy.get(this.elements.filter)
      .find(this.elements.customSelect)
      .contains(category)
      .click()
      .parent()
      .siblings(this.elements.optionsSibling)
      .find(this.elements.ulElement)
      .find('a')
      .should('have.length.greaterThan', 0)
      .contains('label', selection)
      .then(($a) => {
        const href = $a.attr('href');
        cy.wrap($a).click();

        if (verifyReload) {
          cy.wait(4000)
          cy.url().should('include', href);
        }
      });
  }
}




export const zbrojowniaProductCatalogPage = new ZbrojowniaProductCatalogPage();
