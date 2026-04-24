Feature: Toggle TODO

  Background:
    Given I am on the TODO main page

  Scenario: Checking a TODO marks it with strikethrough
    Given a TODO with the title "Buy milk" exists in the list
    When I click the checkbox for "Buy milk"
    Then the TODO "Buy milk" appears with strikethrough
