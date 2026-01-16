# TechTrendy Swag Store - Teaching Codebase

Welcome to the **TechTrendy Swag Store** project! This codebase is designed to teach the **Testing Pyramid**, including Unit, API, BDD, UI, and Performance testing.

## 🚀 Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start the Application**
    This command starts both the simulated backend (`json-server`) and the frontend (`http-server`).
    ```bash
    npm run start:app
    ```
    - Frontend: [http://localhost:8080](http://localhost:8080)
    - Backend API: [http://localhost:3000](http://localhost:3000)

## 🧪 Running Tests

### 1. Unit Tests (Jest)
Tests pure JavaScript logic in isolation (no database).
```bash
npm run test:unit
```

### 2. API Tests (Supertest)
Tests backend API endpoints directly.
```bash
npm run test:api
```

### 3. BDD Tests (Cucumber)
Tests business scenarios using Gherkin syntax ("Given/When/Then").
```bash
npm run test:bdd
```

### 4. UI Tests (Selenium)
Tests the actual browser interface (requires Chrome).
*Ensure the app is running (`npm run start:app`) before running this.*
```bash
npm run test:ui
```

### 5. Performance Tests (k6)
Simulates load (50 users) on the API.
*Ensure `k6` is installed globally or available in path.*
```bash
npm run test:perf
```

## 📂 Project Structure

    - Usage: `npm run db:reset` to restore initial database state.
-   `public/js/cartLogic.js`: Application logic (Unit Test target).
-   `public/`: Frontend HTML/JS (UI Test target).
-   `tests/unit/`: Jest tests.
-   `tests/api/`: Supertest scripts.
-   `tests/bdd/`: Cucumber features & steps.
-   `tests/ui/`: Selenium WebDriver scripts.
-   `tests/perf/`: k6 load scripts.
-   `db.json`: Database for json-server.

## 🎓 Teaching Mode
This codebase is set up as a **Teaching Repository**. 
Key files contain `// STUDENT: Implement your solution below` comments where you should write code.

Happy Testing! 🎯
