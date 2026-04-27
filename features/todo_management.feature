Feature: TODO management

  Background:
    Given I am on the TODO main page

  @smoke
  Scenario Outline: Adding a todo via <method> adds it to the list and clears the input
    When I add a todo titled "Buy milk" via "<method>"
    Then a TODO with the title "Buy milk" appears in the list
    And the text field is empty

    Examples:
      | method     |
      | Enter key  |
      | Add button |

  @regression
  Scenario: Whitespace-only input does not add a todo
    When I add a todo titled "   "
    Then 0 TODOs appear in the list

  @regression
  Scenario: Empty state is shown when no todos exist
    Then the empty state is visible

  @regression
  Scenario: Empty state disappears after adding a todo
    When I add a todo titled "Buy milk"
    Then the empty state is not visible

  @regression
  Scenario: New todo is appended to the bottom of the list
    Given a TODO with the title "First task" exists in the list
    When I add a todo titled "Second task"
    Then "Second task" appears as the last TODO in the list

  @regression
  Scenario: All added todos appear in the list
    When I add a todo titled "Buy milk"
    And I add a todo titled "Walk the dog"
    And I add a todo titled "Write tests"
    Then 3 TODOs appear in the list
