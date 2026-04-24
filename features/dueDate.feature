Feature: Due Date on TODO items

  Background:
    Given I am on the TODO main page

  Scenario: Add a TODO with a due date
    When I click on the text field
    And I type "Submit report"
    And I set the due date to "2026-05-01"
    And I press the Enter key
    Then a TODO with the title "Submit report" appears in the list
    And the TODO "Submit report" shows the due date "2026-05-01"

  Scenario: Add a TODO without a due date
    When I click on the text field
    And I type "Buy milk"
    And I press the Enter key
    Then a TODO with the title "Buy milk" appears in the list
    And the TODO "Buy milk" shows no due date
