Feature: Add TODO Validation

  Background:
    Given I am on the TODO main page

  Scenario: Whitespace-only input does not add a TODO
    When I click on the text field
    And I type "   "
    And I press the Enter key
    Then the TODO list has 0 items
