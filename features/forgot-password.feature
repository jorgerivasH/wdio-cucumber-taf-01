Feature: Forgot Password

  As a user who forgot their password
  I want to request a password reset
  So that I can regain access to my account

  Scenario: Request password reset with a valid email
    Given I am on the forgot password page
    When I request a password reset for "test@example.com"
    Then I should see a confirmation message