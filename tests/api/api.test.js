const request = require('supertest');
const API_URL = 'http://localhost:3000';

// API TEST: verifying backend endpoints (Integration Layer)
describe('API Layer Tests', () => {

    test('GET /products returns 200 and list of products', async () => {
        const response = await request(API_URL).get('/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    // STUDENT: Implement the POST /cart test below
    // requirements:
    // 1. Send a POST request to /cart with a valid cart item
    // 2. Assert status is 201
    // 3. Assert response body contains the user 

    // ANSWER BEGIN
    test('POST /cart adds an item successfully', async () => {
        const cartItem = {
            items: [{ id: 1, name: "Test Item", price: 10 }],
            total: 10,
            user: "testuser"
        };

        const response = await request(API_URL)
            .post('/cart')
            .send(cartItem)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(201); // Created
        expect(response.body.user).toBe("testuser");
    });
    // END OF ANSWER
});
