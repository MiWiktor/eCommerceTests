interface SelectorOption {
  selector: string;
}

interface NewUserFormValidationMessages {
  choice_first?: number;
  email_validation?: string;
  choice_second?: number;
  repeat_email_validation?: string;
  choice_third?: number;
  password_validation?: string;
  choice_forth?: number;
  repeat_password_validation?: string;
  choice_fifth?: number;
  agreement_validation?: string;
  choice_sixth?: number;
  email_taken_or_account_created?: string;
}

interface NewUserFormData {
  choice_first?: number;
  email?: string;
  choice_second?: number;
  repeat_email?: string;
  choice_third?: number;
  password?: string;
  choice_forth?: number;
  repeat_password?: string;
  button_first?: number;
  button_second?: number;
  button_third?: number;
}

export const zbrojowniaRegistrationPageClickOptions = {
  NEW_USER_SUBMIT_BUTTON: 1,
  AGREEMENT_CHECKBOX: 2,
  MARKETING_CHECKBOX: 3,
};

export const zbrojowniaRegistrationPageInputOptions = {
  EMAIL_INPUT: 1,
  REPEAT_EMAIL_INPUT: 2,
  PASSWORD_INPUT: 3,
  REPEAT_PASSWORD_INPUT: 4,
};

export const zbrojowniaRegistrationPageValidationMessages = {
  EMAIL_ERROR_MESSAGE: 1,
  REPEAT_EMAIL_ERROR_MESSAGE: 2,
  PASSWORD_ERROR_MESSAGE: 3,
  REPEAT_PASSWORD_ERROR_MESSAGE: 4,
  AGREEMENT_ERR_MESSAGE: 5,
  EMAIL_EXISTS_AND_ACCOUNT_CREATED_MSG: 6
};


const selectors = {
  ZBROJOWNIA_REGISTRATION_PAGE: {
    EMAIL_LABEL: '[id="user_email"] + label',
    EMAIL_INPUT: '[id="user_email"]',
    EMAIL_ERROR_MESSAGE: '[id="user_email-error"]',
    REPEAT_EMAIL_LABEL: '[id="user_email2"] + label',
    REPEAT_EMAIL_INPUT: '[id="user_email2"]',
    REPEAT_EMAIL_ERROR_MESSAGE: '[id="user_email2-error"]',
    PASSWORD_LABEL: '[id="user_password"] + label',
    PASSWORD_INPUT: '[id="user_password"]',
    PASSWORD_ERROR_MESSAGE: '[id="user_password-error"]',
    REPEAT_PASSWORD_LABEL: '[id="user_password2"] + label',
    REPEAT_PASSWORD_INPUT: '[id="user_password2"]',
    REPEAT_PASSWORD_ERROR_MESSAGE: '[id="user_password2-error"]',
    AGREEMENT_CHECKBOX: '[id="agreement_id-20"]',
    AGREEMENT_ERR_MESSAGE: '[id="err_agreement_id-20"]',
    MARKETING_CHECKBOX: '[id="agreement_id-10"]',
    EMAIL_EXISTS_AND_ACCOUNT_CREATED_MSG: 'div#messageInline',
    NEW_USER_SUBMIT_BUTTON: '[id="SHOP_USER_NEW_SUBMIT"]',
  },
};

class ZbrojowniaRegistrationPage {
  zbrojowniaRegistrationPageInputOptions: Map<number, SelectorOption> = new Map([
    [
      zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.EMAIL_INPUT,
      },
    ],
    [
      zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.REPEAT_EMAIL_INPUT,
      },
    ],
    [
      zbrojowniaRegistrationPageInputOptions.PASSWORD_INPUT,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.PASSWORD_INPUT,
      },
    ],
    [
      zbrojowniaRegistrationPageInputOptions.REPEAT_PASSWORD_INPUT,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.REPEAT_PASSWORD_INPUT,
      },
    ],
  ]);

  zbrojowniaRegistrationPageClickOptions: Map<number, SelectorOption> = new Map([
    [
      zbrojowniaRegistrationPageClickOptions.NEW_USER_SUBMIT_BUTTON,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.NEW_USER_SUBMIT_BUTTON,
      },
    ],
    [
      zbrojowniaRegistrationPageClickOptions.AGREEMENT_CHECKBOX,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.AGREEMENT_CHECKBOX,
      },
    ],
    [
      zbrojowniaRegistrationPageClickOptions.MARKETING_CHECKBOX,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.MARKETING_CHECKBOX,
      },
    ]
  ]);

  zbrojowniaRegistrationPageValidationMessages: Map<number, SelectorOption> = new Map([
    [
      zbrojowniaRegistrationPageValidationMessages.EMAIL_ERROR_MESSAGE,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.EMAIL_ERROR_MESSAGE
      }
    ],
    [
      zbrojowniaRegistrationPageValidationMessages.REPEAT_EMAIL_ERROR_MESSAGE,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.REPEAT_EMAIL_ERROR_MESSAGE
      }
    ],
    [
      zbrojowniaRegistrationPageValidationMessages.PASSWORD_ERROR_MESSAGE,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.PASSWORD_ERROR_MESSAGE
      }
    ],
    [
      zbrojowniaRegistrationPageValidationMessages.REPEAT_EMAIL_ERROR_MESSAGE,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.REPEAT_EMAIL_ERROR_MESSAGE
      }
    ],
    [
      zbrojowniaRegistrationPageValidationMessages.AGREEMENT_ERR_MESSAGE,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.AGREEMENT_ERR_MESSAGE
      }
    ],
    [
      zbrojowniaRegistrationPageValidationMessages.EMAIL_EXISTS_AND_ACCOUNT_CREATED_MSG,
      {
        selector: selectors.ZBROJOWNIA_REGISTRATION_PAGE.EMAIL_EXISTS_AND_ACCOUNT_CREATED_MSG
      }
    ] 
  ]);

  clickButton(choice: number): void {
    if (this.zbrojowniaRegistrationPageClickOptions.has(choice)) {
      const choiceData = this.zbrojowniaRegistrationPageClickOptions.get(choice);
      if (choiceData) {
        cy.get(choiceData.selector, { timeout: 10000 }).click();
      }
    }
  }

  fillNewUserForm({
    choice_first,
    email,
    choice_second,
    repeat_email,
    choice_third,
    password,
    choice_forth,
    repeat_password,
    button_first,
    button_second,
    button_third
  }: NewUserFormData): void {
    
    if (choice_first !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_first)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_first);
      if (choiceData && email !== undefined) {
        cy.get(choiceData.selector).click().type(email);
      }
    }
    if (choice_second !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_second)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_second);
      if (choiceData && repeat_email !== undefined) {
        cy.get(choiceData.selector).click().type(repeat_email);
      }
    }
    if (choice_third !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_third)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_third);
      if (choiceData && password !== undefined) {
        cy.get(choiceData.selector).click().type(password);
      }
    }
    if (choice_forth !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_forth)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_forth);
      if (choiceData && repeat_password !== undefined) {
        cy.get(choiceData.selector).click().type(repeat_password);
      }
    }
    if (button_first !== undefined) {
      this.clickButton(button_first);
    }
    if (button_second !== undefined) {
      this.clickButton(button_second);
    }
    if (button_third !== undefined) {
      this.clickButton(button_third);
    }
  }

  verifyFormValidation({
    choice_first,
    email_validation,
    choice_second,
    repeat_email_validation,
    choice_third,
    password_validation,
    choice_forth,
    repeat_password_validation,
    choice_fifth,
    agreement_validation,
    choice_sixth,
    email_taken_or_account_created    
  }: NewUserFormValidationMessages): void {
    
    if (choice_first !== undefined && this.zbrojowniaRegistrationPageValidationMessages.has(choice_first)) {
      if (this.zbrojowniaRegistrationPageValidationMessages.has(choice_first)) {
        const choiceData = this.zbrojowniaRegistrationPageValidationMessages.get(choice_first);
        if (choiceData && email_validation !== undefined)
        {
        cy.get(choiceData.selector).contains(email_validation).should('be.visible');
        }
      }
    }
    if (choice_second !== undefined && this.zbrojowniaRegistrationPageValidationMessages.has(choice_second)) {
      if (this.zbrojowniaRegistrationPageValidationMessages.has(choice_second)) {
        const choiceData = this.zbrojowniaRegistrationPageValidationMessages.get(choice_second);
        if (choiceData && repeat_email_validation !== undefined)
        {
        cy.get(choiceData.selector).contains(repeat_email_validation).should('be.visible');
        }
      }
    }
    if (choice_third !== undefined && this.zbrojowniaRegistrationPageValidationMessages.has(choice_third)) {
      if (this.zbrojowniaRegistrationPageValidationMessages.has(choice_third)) {
        const choiceData = this.zbrojowniaRegistrationPageValidationMessages.get(choice_third);
        if (choiceData && password_validation !== undefined)
        {
        cy.get(choiceData.selector).contains(password_validation).should('be.visible');
        }
      }
    }
    if (choice_forth !== undefined && this.zbrojowniaRegistrationPageValidationMessages.has(choice_forth)) {
      if (this.zbrojowniaRegistrationPageValidationMessages.has(choice_forth)) {
        const choiceData = this.zbrojowniaRegistrationPageValidationMessages.get(choice_forth);
        if (choiceData && repeat_password_validation !== undefined)
        {
        cy.get(choiceData.selector).contains(repeat_password_validation).should('be.visible');
        }
      }
    }
    if (choice_fifth !== undefined && this.zbrojowniaRegistrationPageValidationMessages.has(choice_fifth)) {
      if (this.zbrojowniaRegistrationPageValidationMessages.has(choice_fifth)) {
        const choiceData = this.zbrojowniaRegistrationPageValidationMessages.get(choice_fifth);
        if (choiceData && agreement_validation !== undefined)
        {
        cy.get(choiceData.selector).contains(agreement_validation).should('be.visible');
        }
      }
    }
    if (choice_sixth !== undefined && this.zbrojowniaRegistrationPageValidationMessages.has(choice_sixth)) {
      if (this.zbrojowniaRegistrationPageValidationMessages.has(choice_sixth)) {
        const choiceData = this.zbrojowniaRegistrationPageValidationMessages.get(choice_sixth);
        if (choiceData && email_taken_or_account_created !== undefined)
        {
        cy.get(choiceData.selector).contains(email_taken_or_account_created).should('be.visible');
        }
      }
    }
  }

  clearNewUserForm({
    choice_first,
    choice_second,
    choice_third,
    choice_forth,    
  }: NewUserFormData): void {
    
    if (choice_first !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_first)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_first);
      if (choiceData !== undefined)
        {
        cy.get(choiceData.selector).click().clear();
        }      
    }
    if (choice_second !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_second)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_second);
      if (choiceData !== undefined)
        {
        cy.get(choiceData.selector).click().clear();
        }      
    }
    if (choice_third !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_third)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_third);
      if (choiceData !== undefined)
        {
        cy.get(choiceData.selector).click().clear();
        }      
    }
    if (choice_forth !== undefined && this.zbrojowniaRegistrationPageInputOptions.has(choice_forth)) {
      const choiceData = this.zbrojowniaRegistrationPageInputOptions.get(choice_forth);
      if (choiceData !== undefined)
        {
        cy.get(choiceData.selector).click().clear();
        }      
      }
  }


}

export default new ZbrojowniaRegistrationPage();
