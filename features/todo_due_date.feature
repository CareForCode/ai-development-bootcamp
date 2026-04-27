Feature: TODO due dates

  Background:
    Given I am on the TODO main page

  @smoke
  Scenario: A todo with a due date displays the date
    When I add a todo titled "Submit report" with due date "2026-05-01"
    Then the TODO "Submit report" shows the due date "2026-05-01"

  @regression
  Scenario: A todo without a due date shows no date
    When I add a todo titled "Buy milk"
    Then the TODO "Buy milk" shows no due date
