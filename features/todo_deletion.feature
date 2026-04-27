Feature: TODO deletion

  Background:
    Given I am on the TODO main page

  @smoke
  Scenario: Deleting a todo removes it from the list
    Given a TODO with the title "Buy milk" exists in the list
    When I delete the todo "Buy milk"
    Then "Buy milk" is no longer in the list

  @regression
  Scenario: Deleting the last todo shows the empty state
    Given a TODO with the title "Buy milk" exists in the list
    When I delete the todo "Buy milk"
    Then the empty state is visible
