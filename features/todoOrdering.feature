Feature: TODO Ordering

  Background:
    Given I am on the TODO main page

  Scenario: New TODO appears at the bottom of the list
    Given a TODO with the title "First task" exists in the list
    And a TODO with the title "Second task" exists in the list
    When I click on the text field
    And I type "Third task"
    And I press the Enter key
    Then "Third task" appears as the last TODO in the list
