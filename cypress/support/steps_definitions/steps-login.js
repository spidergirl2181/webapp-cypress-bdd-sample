import { loginMarmelab } from '../../pageobjects/login_po'
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open homepage', () => {
  loginMarmelab.launchLoginPage()
})

When('I log in as valid user', () => {
  loginMarmelab.signIn()
})

Then('the user account should be displayed', () => {
  loginMarmelab.verifyLoginSuccess()
})