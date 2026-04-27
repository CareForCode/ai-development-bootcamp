Feature: TODO persistence via localStorage

  Background:
    Given I am on the TODO main page

  @smoke
  Scenario: TODOs survive a page reload
    Given a TODO with the title "Buy milk" exists in the list
    When I reload the page
    Then a TODO with the title "Buy milk" appears in the list

  @regression
  Scenario: Completed state survives a page reload
    Given a TODO with the title "Buy milk" exists in the list
    And I toggle the todo "Buy milk"
    When I reload the page
    Then the TODO "Buy milk" appears with strikethrough

  @regression
  Scenario: Due date survives a page reload
    When I add a todo titled "Submit report" with due date "2026-05-01"
    And I reload the page
    Then the TODO "Submit report" shows the due date "2026-05-01"

  @regression
  Scenario: Deleted TODOs do not reappear after reload
    Given a TODO with the title "Buy milk" exists in the list
    When I delete the todo "Buy milk"
    And I reload the page
    Then 0 TODOs appear in the list

  @regression
  Scenario: Multiple TODOs persist in correct order
    Given a TODO with the title "First task" exists in the list
    And a TODO with the title "Second task" exists in the list
    When I reload the page
    Then 2 TODOs appear in the list
    And "First task" appears as the first TODO in the list
    And "Second task" appears as the last TODO in the list
