Feature: Search poster test on website marmelab.com

   Scenario: Check searching 3rd poster via relevant keyword
      Given I log in as valid user
      When I navigate to Poster page and search with {keyword}
      Then the 3rd poster should be displayed