interface SelectorOption {
    selector: string;
  }
  
  interface LoginFormValidationMessages {
    choice_first?: number;
    email?: string;
    choice_second?: number;
    password?: string;
    button_first?: number;
    login_error_message?: string;
  }
  
  interface LoginFormData {
    choice_first?: number;
    email?: string;
    choice_second?: number;
    password?: string;
    button_first?: number;
  }
  
  export const zbrojowniaLoginPageClickOptions = {
    LOGIN_BUTTON: 1,
  };
  
  export const zbrojowniaLoginPageInputOptions = {
    EMAIL_INPUT: 1,
    PASSWORD_INPUT: 2
  };
  
  export const zbrojowniaLoginPageValidationMessages = {
    LOGIN_ERROR_MESSAGE: 1
  };
  
  
  const selectors = {
    ZBROJOWNIA_LOGIN_PAGE: {
      EMAIL_LABEL: 'input[name="user_username"] + label',
      EMAIL_INPUT: 'input[name="user_username"]',
      PASSWORD_LABEL: 'input[name="user_password"]+ label',
      PASSWORD_INPUT: 'input[name="user_password"]',
      LOGIN_ERROR_MESSAGE: 'div#messageInline',
      LOGIN_BUTTON: 'a[onclick="$(\'#LOGOWANIE_FULL\').submit();"]',
    },
  };
  
  class ZbrojowniaLoginPage {
    zbrojowniaLoginPageInputOptions: Map<number, SelectorOption> = new Map([
      [
        zbrojowniaLoginPageInputOptions.EMAIL_INPUT,
        {
          selector: selectors.ZBROJOWNIA_LOGIN_PAGE.EMAIL_INPUT,
        },
      ],
      [
        zbrojowniaLoginPageInputOptions.PASSWORD_INPUT,
        {
          selector: selectors.ZBROJOWNIA_LOGIN_PAGE.PASSWORD_INPUT,
        },
      ]      
    ]);
  
    zbrojowniaLoginPageClickOptions: Map<number, SelectorOption> = new Map([
      [
        zbrojowniaLoginPageClickOptions.LOGIN_BUTTON,
        {
          selector: selectors.ZBROJOWNIA_LOGIN_PAGE.LOGIN_BUTTON,
        },
      ],
    ]);
  
    zbrojowniaLoginPageValidationMessages: Map<number, SelectorOption> = new Map([
      [
        zbrojowniaLoginPageValidationMessages.LOGIN_ERROR_MESSAGE,
        {
          selector: selectors.ZBROJOWNIA_LOGIN_PAGE.LOGIN_ERROR_MESSAGE
        }
      ]      
    ]);
  
    clickButton(choice: number): void {
      if (this.zbrojowniaLoginPageClickOptions.has(choice)) {
        const choiceData = this.zbrojowniaLoginPageClickOptions.get(choice);
        if (choiceData) {
          cy.get(choiceData.selector, { timeout: 10000 }).click();
        }
      }
    }
  
    fillLoginForm({
      choice_first,
      email,
      choice_second,
      password,
      button_first     
    }: LoginFormData): void {
      
      if (choice_first !== undefined && this.zbrojowniaLoginPageInputOptions.has(choice_first)) {
        const choiceData = this.zbrojowniaLoginPageInputOptions.get(choice_first);
        if (choiceData && email !== undefined) {
          cy.get(choiceData.selector).click().type(email);
        }
      }
      if (choice_second !== undefined && this.zbrojowniaLoginPageInputOptions.has(choice_second)) {
        const choiceData = this.zbrojowniaLoginPageInputOptions.get(choice_second);
        if (choiceData && password !== undefined) {
          cy.get(choiceData.selector).click().type(password);
        }
      }
      if (button_first !== undefined) {
        this.clickButton(button_first);
      }      
    }
  
    verifyFormValidation({
        choice_first,
        login_error_message    
    }: LoginFormValidationMessages): void {
      
      if (choice_first !== undefined && this.zbrojowniaLoginPageValidationMessages.has(choice_first)) {
        if (this.zbrojowniaLoginPageValidationMessages.has(choice_first)) {
          const choiceData = this.zbrojowniaLoginPageValidationMessages.get(choice_first);
          if (choiceData && login_error_message !== undefined)
          {
          cy.get(choiceData.selector).contains(login_error_message).should('be.visible');
          }
        }
      }      
    }
  
    clearLoginForm({
      choice_first,
      choice_second
    }: LoginFormData): void {
      
      if (choice_first !== undefined && this.zbrojowniaLoginPageInputOptions.has(choice_first)) {
        const choiceData = this.zbrojowniaLoginPageInputOptions.get(choice_first);
        cy.get(choiceData.selector).click().clear();
      }
      if (choice_second !== undefined && this.zbrojowniaLoginPageInputOptions.has(choice_second)) {
        const choiceData = this.zbrojowniaLoginPageInputOptions.get(choice_second);
        cy.get(choiceData.selector).click().clear();
      }      
    }
  }
  
  export default new ZbrojowniaLoginPage();
  