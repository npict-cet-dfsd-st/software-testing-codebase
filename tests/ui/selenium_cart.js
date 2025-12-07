const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

(async function example() {
    // UI TEST: End-to-End User Interface testing
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // 1. Open the App (Assumes app is running on localhost:8080)
        await driver.get('http://localhost:8080');

        // 2. Wait for products to load
        await driver.wait(until.elementLocated(By.css('.product-card button')), 5000);

        // 3. Find "Add to Cart" button for the Hoodie (first item usually)
        // We'll click the first button found
        const addButtons = await driver.findElements(By.css('.product-card button'));
        await addButtons[0].click();

        // 4. Assert that the "Total" displayed updates to "100"

        // STUDENT: Implement the assertion logic below
        // requirements:
        // 1. Find the element with id 'total-price'
        // 2. Wait for its text to become "100"
        // 3. Assert that the text is indeed "100"

        // ANSWER BEGIN
        const totalElement = await driver.findElement(By.id('total-price'));

        // Wait for text to update
        await driver.wait(async () => {
            const text = await totalElement.getText();
            return text === '100';
        }, 5000);

        const totalText = await totalElement.getText();
        console.log('UI Test Passed: Total updated to ' + totalText);
        assert.strictEqual(totalText, '100');
        // END OF ANSWER

    } catch (e) {
        if (e.message.includes('SessionNotCreatedError')) {
            console.error('\n⚠️  ChromeDriver Version Mismatch ⚠️');
            console.error('Please update your ChromeDriver to match your Chrome browser version.');
            console.error('Try running: npm install chromedriver@latest --save-dev\n');
        } else {
            console.error('UI Test Failed', e);
        }
        process.exit(1);
    } finally {
        if (driver) {
            await driver.quit();
        }
    }
})();
