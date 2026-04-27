Feature: TODO completion

  Background:
    Given I am on the TODO main page
    And a TODO with the title "Buy milk" exists in the list

  @smoke
  Scenario: Checking a todo marks it as completed
    When I toggle the todo "Buy milk"
    Then the TODO "Buy milk" appears with strikethrough

  @regression
  Scenario: Unchecking a completed todo marks it as active
    When I toggle the todo "Buy milk"
    And I toggle the todo "Buy milk"
    Then the TODO "Buy milk" does not appear with strikethrough
