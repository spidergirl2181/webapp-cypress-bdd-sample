Feature: Search poster test on website marmelab.com

   Scenario: Check searching 3rd poster via relevant keyword
      Given I open homepage
      When I log in as valid user
      And the user account should be displayed
      And I click on left navigation menu to open Poster page
      And I search for some poster name
      Then the expected poster name is displayed
