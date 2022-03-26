Feature: Add Customer Test on website marmelab.com

   Scenario: Check adding customer successfully
      Given I log in as valid user
      When I try to add new customer
      Then the new customer account should be displayed