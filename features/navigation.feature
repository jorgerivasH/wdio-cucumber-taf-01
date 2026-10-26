Feature: Basic Navigation
  As a user
  I want to access the home page
  In order to verify that the site is online

  Scenario: Successfully access the home page
    Given I am on the home page
    Then the page title should be "Google"