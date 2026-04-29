Feature: TODO REST API

  Scenario: Todo erstellen
    When I create a todo with title "Buy milk"
    Then the response status is 201
    And the response todo has title "Buy milk"
    And the response todo is not completed
