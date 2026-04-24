Feature: Multiple TODOs

  Background:
    Given I am on the TODO main page

  Scenario: Multiple TODOs all appear in the list
    Given a TODO with the title "Buy milk" exists in the list
    And a TODO with the title "Walk the dog" exists in the list
    Then 2 TODOs appear in the list
