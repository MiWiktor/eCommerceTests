/// <reference types="cypress" />

import zbrojowniaLoginPage, 
{ 
zbrojowniaLoginPageClickOptions, 
zbrojowniaLoginPageInputOptions, 
zbrojowniaLoginPageValidationMessages
} from '../support/page_objects/zbrojowniaLoginPage';
import { user_data } from '../fixtures/test_data'
import {validation_messages } from '../support/site_content/strings'

beforeEach(() => {
    cy.visit('/');

    cy.get('div.bottom-cookie-info').then(($element) => {
      if ($element.is(':visible')) {
        cy.get('button#cksAcceptAll').click();
      }
      cy.visit('/zaloguj'); 
    });
});

describe('Login user page', () => {
    it('Loging in - negative paths and validation messages', () => {
   
      //empty fields + validation message
      zbrojowniaLoginPage.fillLoginForm(
        {
        choice_first: zbrojowniaLoginPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_correct,
        button_first: zbrojowniaLoginPageClickOptions.LOGIN_BUTTON
        }
      );
      zbrojowniaLoginPage.verifyFormValidation(
        {
        choice_first: zbrojowniaLoginPageValidationMessages.LOGIN_ERROR_MESSAGE, 
        login_error_message: validation_messages.login_error_no_data_provided       
        }
      );
      zbrojowniaLoginPage.clearLoginForm({
        choice_first: zbrojowniaLoginPageInputOptions.EMAIL_INPUT
      })
      zbrojowniaLoginPage.fillLoginForm(
        {
        choice_second: zbrojowniaLoginPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_correct,
        button_first: zbrojowniaLoginPageClickOptions.LOGIN_BUTTON
        }
      );
      zbrojowniaLoginPage.verifyFormValidation(
        {
        choice_first: zbrojowniaLoginPageValidationMessages.LOGIN_ERROR_MESSAGE, 
        login_error_message: validation_messages.login_error_no_data_provided       
        }
      );
      zbrojowniaLoginPage.clearLoginForm({
        choice_second: zbrojowniaLoginPageInputOptions.PASSWORD_INPUT
      })
      zbrojowniaLoginPage.fillLoginForm(
        {
        button_first: zbrojowniaLoginPageClickOptions.LOGIN_BUTTON
        }
      );
      zbrojowniaLoginPage.verifyFormValidation(
        {
        choice_first: zbrojowniaLoginPageValidationMessages.LOGIN_ERROR_MESSAGE, 
        login_error_message: validation_messages.login_error_no_data_provided       
        }
      );

      //incorrect login data + validation message
      zbrojowniaLoginPage.fillLoginForm(
        {
        choice_first: zbrojowniaLoginPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_incorrect,
        choice_second: zbrojowniaLoginPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_existing,
        button_first: zbrojowniaLoginPageClickOptions.LOGIN_BUTTON        
        }
      );
      zbrojowniaLoginPage.verifyFormValidation(
        {
        choice_first: zbrojowniaLoginPageValidationMessages.LOGIN_ERROR_MESSAGE, 
        login_error_message: validation_messages.login_error_incorrect_pass_or_email       
        }
      );
      zbrojowniaLoginPage.clearLoginForm({
        choice_first: zbrojowniaLoginPageInputOptions.EMAIL_INPUT,
        choice_second: zbrojowniaLoginPageInputOptions.PASSWORD_INPUT
      })
      zbrojowniaLoginPage.fillLoginForm(
        {
        choice_first: zbrojowniaLoginPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_existing,
        choice_second: zbrojowniaLoginPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_correct,
        button_first: zbrojowniaLoginPageClickOptions.LOGIN_BUTTON        
        }
      );
      zbrojowniaLoginPage.verifyFormValidation(
        {
        choice_first: zbrojowniaLoginPageValidationMessages.LOGIN_ERROR_MESSAGE, 
        login_error_message: validation_messages.login_error_incorrect_pass_or_email       
        }
      );
      zbrojowniaLoginPage.clearLoginForm({
        choice_first: zbrojowniaLoginPageInputOptions.EMAIL_INPUT,
        choice_second: zbrojowniaLoginPageInputOptions.PASSWORD_INPUT
      })
    })

    it('Loging in - positive path', () => {
      //logging in + url verification + logging out
      zbrojowniaLoginPage.fillLoginForm(
        {
        choice_first: zbrojowniaLoginPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_existing,
        choice_second: zbrojowniaLoginPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_existing,
        button_first: zbrojowniaLoginPageClickOptions.LOGIN_BUTTON        
        }
      );
      cy.url().should('include', '/twoje-konto');
      cy.get('a[href="/wyloguj"]').click();
      cy.url().should('eq', Cypress.config('baseUrl') + '/');
    })
  });