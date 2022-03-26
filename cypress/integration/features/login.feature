Feature: Login Test on website marmelab.com

   Scenario: Check valid logIn with valid user and password
      Given I open homepage
      When I log in as valid user
      Then the user account should be displayed
