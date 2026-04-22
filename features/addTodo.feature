Feature: Add TODO

  Background:
    Given I am on the TODO main page

  Scenario: Add a new TODO via Enter key
    When I click on the text field
    And I type "We are great"
    And I press the Enter key
    Then a TODO with the title "We are great" appears in the list
