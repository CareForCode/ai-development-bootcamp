Feature: Clear input after adding a TODO

  Background:
    Given I am on the TODO main page

  Scenario: Input is cleared after pressing Enter
    When I click on the text field
    And I type "Buy milk"
    And I press the Enter key
    Then the text field is empty

  Scenario: Input is cleared after clicking the Add button
    When I click on the text field
    And I type "Buy milk"
    And I click the Add button
    Then the text field is empty
