import { loginMarmelab } from '../../pageobjects/login_po'
import { searchPoster } from '../../pageobjects/search_poster_po'
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I open homepage', () => {
  loginMarmelab.launchLoginPage()
})

When('I log in as valid user', () => {
  loginMarmelab.signIn()
})

And('the user account should be displayed', () => {
  loginMarmelab.verifyLoginSuccess()
})

And('I click on left navigation menu to open Poster page', () => {
  searchPoster.launchPosterPage()
})

And('I search for some poster name', () => {
  searchPoster.searchPoster()
})

Then('the expected poster name is displayed', () => {
  searchPoster.verifyPosterDisplayed()
})