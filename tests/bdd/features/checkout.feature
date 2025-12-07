Feature: Checkout Process

  Scenario: User buys a hoodie
    Given user has 500 points
    When they add "Hoodie" to the cart
    Then remaining balance should be 400 points
