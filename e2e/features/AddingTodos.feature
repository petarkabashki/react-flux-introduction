Feature: Adding todos

As a todoist
I want to be able to add todos to the list
So I can happily remove them afterwards

Scenario: Adding todos
    Given I have visited the page
    And I enter task 'buy chewing gum'
    And I click the add button
    And I enter task 'buy a rubber band machine gun'
    And I click the add button
    Then I see both 'buy chewing gum' and 'buy a rubber band machine gun' tasks in the list
