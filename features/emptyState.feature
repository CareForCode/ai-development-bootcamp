Feature: Empty State

  Background:
    Given I am on the TODO main page

  Scenario: Empty state is visible on load
    Then the empty state is visible

  Scenario: Empty state is hidden after adding a TODO
    When I click on the text field
    And I type "Buy milk"
    And I press the Enter key
    Then the empty state is not visible

  Scenario: Empty state reappears after deleting the last TODO
    Given a TODO with the title "Buy milk" exists in the list
    When I click the delete button for "Buy milk"
    Then the empty state is visible
