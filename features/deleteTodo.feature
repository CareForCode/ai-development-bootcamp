Feature: Delete TODO

  Background:
    Given I am on the TODO main page

  Scenario: Delete an existing TODO
    Given a TODO with the title "Buy milk" exists in the list
    When I click the delete button for "Buy milk"
    Then "Buy milk" is no longer in the list
