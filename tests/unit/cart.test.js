const { calculateTotal, removeItem, isValidDiscount } = require('../../public/js/cartLogic');

// UNIT TEST: Testing logic in isolation without a database
describe('Cart Logic Unit Tests', () => {

    test('calculateTotal sums item prices correctly', () => {
        const cart = [{ price: 100 }, { price: 50 }];
        expect(calculateTotal(cart)).toBe(150.00);
    });

    test('calculateTotal applies "KUDOS10" discount correctly', () => {
        const cart = [{ price: 100 }];
        // 100 * 0.9 = 90
        expect(calculateTotal(cart, 'KUDOS10')).toBe(90.00);
    });

    test('calculateTotal ignores invalid discount codes', () => {
        const cart = [{ price: 100 }];
        expect(calculateTotal(cart, 'INVALID')).toBe(100.00);
    });

    test('calculateTotal handles empty cart', () => {
        expect(calculateTotal([])).toBe(0.00);
    });
});

describe('Remove Item Logic Unit Tests', () => {
    // STUDENT: Implement tests for removeItem
    // requirements:
    // 1. Test removing an existing item reduces array length
    // 2. Test removing a non-existing item does nothing

    // ANSWER BEGIN
    test('removeItem removes the correct item by id', () => {
        const cart = [{ id: 1, price: 10 }, { id: 2, price: 20 }];
        const result = removeItem(cart, 1);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(2);
    });

    test('removeItem does nothing if id not found', () => {
        const cart = [{ id: 1, price: 10 }];
        const result = removeItem(cart, 999);
        expect(result.length).toBe(1);
    });
    // END OF ANSWER
});

describe('Discount Validation Unit Tests', () => {
    // STUDENT: Implement tests for isValidDiscount
    // requirements:
    // 1. Test "KUDOS10" returns true
    // 2. Test other strings return false

    // ANSWER BEGIN
    test('isValidDiscount returns true for "KUDOS10"', () => {
        expect(isValidDiscount('KUDOS10')).toBe(true);
    });

    test('isValidDiscount returns false for invalid codes', () => {
        expect(isValidDiscount('INVALID')).toBe(false);
        expect(isValidDiscount('')).toBe(false);
    });
    // END OF ANSWER
});
