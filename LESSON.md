# 🎓 The Testing Pyramid: A Practical Guide

Welcome, QA Engineer! 🕵️‍♂️

You have inherited "The TechTrendy Swag Store", but it has no safety net. Your mission is to build a robust testing strategy using the **Testing Pyramid**.

The Codebase is currently "broken" (or rather, unimplemented). You will visit each layer of the pyramid, understand *why* it matters, and write the code to fix it.

---

## 🏗️ Pre-Flight Check
1.  **Install tools**: `npm install`
2.  **Start the app**: `npm run start:app`
    *   Open [http://localhost:8080](http://localhost:8080) in your browser.
    *   *Keep this terminal open in the background!*

---

## 🔻 Level 1: Unit Tests (The Foundation)

### 🧠 Concept
Unit tests are the base of the pyramid. They test individual functions or components in isolation, without talking to a database or network.
*   **Why they matter**: They are **FAST** and **CHEAP**. If a calculation is wrong, you want to know instantly, not wait for a browser to launch.
*   **The Scenario**: The shopping cart needs to calculate totals and apply discounts.

### 🛠️ Your Mission
1.  **Run the tests**: `npm run test:unit`
    *   *Result*: 🔴 Fails. Logic is missing.
2.  **Fix the Code**: Open `public/js/cartLogic.js`.
    *   Find the `// STUDENT` comments.
    *   Implement `calculateTotal`, `removeItem`, and `isValidDiscount`.
3.  **Verify**: Run `npm run test:unit` again.
    *   *Result*: 🟢 All tests passed!

---

## 🔗 Level 2: API Tests (Integration)

### 🧠 Concept
API tests verify that your backend endpoints (the "contract") are working correctly. They check if the server accepts and returns data as expected.
*   **Why they matter**: A working frontend doesn't matter if the backend is broken. These tests are slower than unit tests but faster than UI tests.
*   **The Scenario**: We need to ensure that when a user adds an item, the backend actually saves it.

### 🛠️ Your Mission
1.  **Run the tests**: `npm run test:api`
    *   *Result*: 🔴 Fails. The `POST /cart` test is missing.
2.  **Fix the Code**: Open `tests/api/api.test.js`.
    *   Implement the `POST /cart` test using `supertest`.
    *   Verify it returns a `201 Created` status.
3.  **Verify**: Run `npm run test:api` again.
    *   *Result*: 🟢 Passed. Your backend integrity is confirmed.

---

## 🥒 Level 3: BDD (Behavior Driven Development)

### 🧠 Concept
BDD (using Cucumber) bridges the gap between technical code and business requirements. Tests are written in plain English ("Gherkin").
*   **Why they matter**: They ensure you are building **what the business actually asked for**, not just what you *thought* they asked for.
*   **The Scenario**: "User buys a hoodie". We need to verify the math from a business perspective.

### 🛠️ Your Mission
1.  **Run the tests**: `npm run test:bdd`
    *   *Result*: ⚠️ Pending or Undefined. The "Then" step is missing glue code.
2.  **Fix the Code**: Open `tests/bdd/step_definitions/steps.js`.
    *   Implement the `Then remaining balance should be...` step.
    *   Use the assertion library to check the math.
3.  **Verify**: Run `npm run test:bdd` again.
    *   *Result*: 🟢 Scenario passed.

---

## 🖥️ Level 4: UI Tests (End-to-End)

### 🧠 Concept
UI tests (using Selenium) simulate a real user clicking buttons in a real browser.
*   **Why they matter**: They are the ultimate "Integration Test". Logic and API might work, but if the "Buy" button is covered by a popup, the user can't buy!
*   **The Trade-off**: They are **SLOW** and **BRITTLE**. Use them sparingly for critical paths.
*   **The Scenario**: A user clicks "Add to Cart". We must see the Total update on the screen.

### 🛠️ Your Mission
1.  **Run the tests**: `npm run test:ui`
    *   *Result*: 🔴 Fails. The test clicks but doesn't check the result.
2.  **Fix the Code**: Open `tests/ui/selenium_cart.js`.
    *   Implement the assertion logic.
    *   Tell Selenium to **wait** for the text to change to "100", then assert it.
3.  **Verify**: Run `npm run test:ui` again.
    *   *Result*: 🟢 Validated! A real browser launched and confirmed the feature.

---

## 📉 Level 5: Performance Testing

### 🧠 Concept
Performance tests (using k6) simulate heavy traffic to see if your app remains stable.
*   **Why they matter**: "It works on my machine" isn't enough. If 50 people buy generic swag at once, will the server crash?
*   **The Scenario**: Simulate 50 Virtual Users (VUs) browsing products simultaneously.

### 🛠️ Your Mission
1.  **Analyze**: Open `tests/perf/load_test.js`.
2.  **Run**: `npm run test:perf`
3.  **Interpret**:
    *   Look at `http_req_duration`. Is `p(95)` (95th percentile) under 200ms?
    *   Look at `http_req_failed`. It should be `0.00%`.

---

## 🏆 Congratulations!

You have successfully implemented a full **Testing Pyramid**!

| Layer | Tool | What it tests |
| :--- | :--- | :--- |
| **Unit** | Jest | Logic integrity |
| **API** | Supertest | Server contracts |
| **BDD** | Cucumber | Business Requirements |
| **UI** | Selenium | User Experience |
| **Perf** | k6 | System Reliability |

You are now ready to ship high-quality code. 🚀
