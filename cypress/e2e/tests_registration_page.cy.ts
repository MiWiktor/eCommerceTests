/// <reference types="cypress" />

import zbrojowniaRegistrationPage, 
{ 
zbrojowniaRegistrationPageClickOptions, 
zbrojowniaRegistrationPageInputOptions, 
zbrojowniaRegistrationPageValidationMessages
} from '../support/page_objects/zbrojowniaRegistrationPage';
import { user_data } from '../fixtures/test_data'
import {validation_messages } from '../support/site_content/strings'

beforeEach(() => {
    cy.visit('/');

    cy.get('div.bottom-cookie-info').then(($element) => {
      if ($element.is(':visible')) {
        cy.get('button#cksAcceptAll').click();
      }
      cy.visit('/rejestracja'); 
    });
});

describe('Register a new user form', () => {
    it('Adding a new user - negative paths and validation messages', () => {
   
      //required fields + validation messages
      zbrojowniaRegistrationPage.fillNewUserForm(
        {
        button_first: zbrojowniaRegistrationPageClickOptions.AGREEMENT_CHECKBOX,
        button_third: zbrojowniaRegistrationPageClickOptions.NEW_USER_SUBMIT_BUTTON
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_first: zbrojowniaRegistrationPageValidationMessages.EMAIL_ERROR_MESSAGE, 
        email_validation: validation_messages.field_required,
        choice_second: zbrojowniaRegistrationPageValidationMessages.REPEAT_EMAIL_ERROR_MESSAGE,
        repeat_email_validation: validation_messages.field_required,
        choice_third: zbrojowniaRegistrationPageValidationMessages.PASSWORD_ERROR_MESSAGE,
        password_validation: validation_messages.field_required,
        choice_forth: zbrojowniaRegistrationPageValidationMessages.REPEAT_PASSWORD_ERROR_MESSAGE,
        repeat_password_validation: validation_messages.field_required
        }
      );
      
      //incorrect email format + validation messages
      zbrojowniaRegistrationPage.fillNewUserForm(
        {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_incorrect
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_first: zbrojowniaRegistrationPageValidationMessages.EMAIL_ERROR_MESSAGE, 
        email_validation: validation_messages.user_email_incorrect,
        }
      );
      zbrojowniaRegistrationPage.clearNewUserForm({choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT});

      //provided emails diffrences + validation messages
      zbrojowniaRegistrationPage.fillNewUserForm(
        {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_correct,
        choice_second: zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT,
        repeat_email: user_data.user_email_correct_2
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_second: zbrojowniaRegistrationPageValidationMessages.REPEAT_EMAIL_ERROR_MESSAGE, 
        repeat_email_validation: validation_messages.user_repeated_email_differences,
        }
      );
      zbrojowniaRegistrationPage.clearNewUserForm(
        {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        choice_second: zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT
        }
      );

      //provided password is too short + validation messages
      zbrojowniaRegistrationPage.fillNewUserForm(
        {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_correct,
        choice_second: zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT,
        repeat_email: user_data.user_email_correct,
        choice_third: zbrojowniaRegistrationPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_short,
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_third: zbrojowniaRegistrationPageValidationMessages.PASSWORD_ERROR_MESSAGE, 
        password_validation: validation_messages.user_password_too_short
        }
      );
      zbrojowniaRegistrationPage.clearNewUserForm(
        {
        choice_third: zbrojowniaRegistrationPageInputOptions.PASSWORD_INPUT
        }
      );

      //provided passwords differences + validation messages
      zbrojowniaRegistrationPage.fillNewUserForm(
        {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_correct,
        choice_second: zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT,
        repeat_email: user_data.user_email_correct,
        choice_third: zbrojowniaRegistrationPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_correct,
        choice_forth: zbrojowniaRegistrationPageInputOptions.REPEAT_PASSWORD_INPUT,
        repeat_password: user_data.user_password_correct_2,
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_forth: zbrojowniaRegistrationPageValidationMessages.REPEAT_PASSWORD_ERROR_MESSAGE, 
        password_validation: validation_messages.user_repeated_password_differences
        }
      );
      zbrojowniaRegistrationPage.clearNewUserForm(
        {
        choice_forth: zbrojowniaRegistrationPageInputOptions.REPEAT_PASSWORD_INPUT
        }
      );

      //lack of shop rules/regulations agreement + validation messages
      zbrojowniaRegistrationPage.fillNewUserForm(
        {
        choice_forth: zbrojowniaRegistrationPageInputOptions.REPEAT_PASSWORD_INPUT,
        repeat_password: user_data.user_password_correct,
        button_first: zbrojowniaRegistrationPageClickOptions.AGREEMENT_CHECKBOX,
        button_third: zbrojowniaRegistrationPageClickOptions.NEW_USER_SUBMIT_BUTTON
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_fifth: zbrojowniaRegistrationPageValidationMessages.AGREEMENT_ERR_MESSAGE, 
        agreement_validation: validation_messages.agreement_not_submit
        }
      );
      zbrojowniaRegistrationPage.clearNewUserForm(
        {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        choice_second: zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT,
        choice_third: zbrojowniaRegistrationPageInputOptions.PASSWORD_INPUT,
        choice_forth: zbrojowniaRegistrationPageInputOptions.REPEAT_PASSWORD_INPUT
        }
      );

      //email already taken + validation messages
      zbrojowniaRegistrationPage.fillNewUserForm(
        {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_existing,
        choice_second: zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT,
        repeat_email: user_data.user_email_existing,
        choice_third: zbrojowniaRegistrationPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_existing,
        choice_forth: zbrojowniaRegistrationPageInputOptions.REPEAT_PASSWORD_INPUT,
        repeat_password: user_data.user_password_existing,
        button_first: zbrojowniaRegistrationPageClickOptions.AGREEMENT_CHECKBOX,
        button_second: zbrojowniaRegistrationPageClickOptions.MARKETING_CHECKBOX,
        button_third: zbrojowniaRegistrationPageClickOptions.NEW_USER_SUBMIT_BUTTON
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_sixth: zbrojowniaRegistrationPageValidationMessages.EMAIL_EXISTS_AND_ACCOUNT_CREATED_MSG, 
        email_taken_or_account_created: validation_messages.email_taken_account_exists
        }
      );
    });

    it('Adding a new user - positive path', () => {
      
      zbrojowniaRegistrationPage.fillNewUserForm(
      {
        choice_first: zbrojowniaRegistrationPageInputOptions.EMAIL_INPUT,
        email: user_data.user_email_correct,
        choice_second: zbrojowniaRegistrationPageInputOptions.REPEAT_EMAIL_INPUT,
        repeat_email: user_data.user_email_correct,
        choice_third: zbrojowniaRegistrationPageInputOptions.PASSWORD_INPUT,
        password: user_data.user_password_correct,
        choice_forth: zbrojowniaRegistrationPageInputOptions.REPEAT_PASSWORD_INPUT,
        repeat_password: user_data.user_password_correct,
        button_first: zbrojowniaRegistrationPageClickOptions.AGREEMENT_CHECKBOX,
        button_second: zbrojowniaRegistrationPageClickOptions.MARKETING_CHECKBOX,
        button_third: zbrojowniaRegistrationPageClickOptions.NEW_USER_SUBMIT_BUTTON
        }
      );
      zbrojowniaRegistrationPage.verifyFormValidation(
        {
        choice_sixth: zbrojowniaRegistrationPageValidationMessages.EMAIL_EXISTS_AND_ACCOUNT_CREATED_MSG, 
        email_taken_or_account_created: validation_messages.account_created_success_message
        }
      );





    })
  });