const { calculateTotal, removeItem, isValidDiscount } = require('../../public/js/cartLogic');

// UNIT TEST: Testing logic in isolation without a database
describe('Cart Logic Unit Tests', () => {

    test('calculateTotal sums item prices correctly', () => {
        const cart = [{ price: 100 }, { price: 50 }];
        expect(calculateTotal(cart)).toBe(150.00);
    });

    test('calculateTotal handles floating point precision correctly', () => {
        const cart = [{ price: 0.1 }, { price: 0.2 }];
        expect(calculateTotal(cart)).toBe(0.30);
    });

    test('calculateTotal handles items without price safely', () => {
        const cart = [{ price: 100 }, { name: 'Free Gift' }];
        expect(calculateTotal(cart)).toBe(100.00);
    });

    test('calculateTotal applies "KUDOS10" discount correctly', () => {
        const cart = [{ price: 100 }];
        // 100 * 0.9 = 90
        expect(calculateTotal(cart, 'KUDOS10')).toBe(90.00);
    });

    test('calculateTotal is case sensitive for discount codes', () => {
        const cart = [{ price: 100 }];
        expect(calculateTotal(cart, 'kudos10')).toBe(100.00);
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

    test('removeItem removes only the first instance of a duplicate', () => {
        const cart = [{ id: 1, price: 10 }, { id: 1, price: 10 }, { id: 2, price: 20 }];
        const result = removeItem(cart, 1);
        expect(result.length).toBe(2);
        // Should still have one item with id 1
        expect(result.filter(i => i.id === 1).length).toBe(1);
    });

    test('removeItem does nothing if id not found', () => {
        const cart = [{ id: 1, price: 10 }];
        const result = removeItem(cart, 999);
        expect(result.length).toBe(1);
    });

    test('removeItem handles empty array safely', () => {
        const cart = [];
        const result = removeItem(cart, 1);
        expect(result).toEqual([]);
    });

    test('removeItem validates input is an array', () => {
        expect(() => removeItem(null, 1)).toThrow(); // Or handle gracefully, depending on design. JS implies throw on null access.
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
        expect(isValidDiscount('kudos10')).toBe(false); // Case sensitive check
    });

    test('isValidDiscount handles non-string inputs', () => {
        expect(isValidDiscount(null)).toBe(false);
        expect(isValidDiscount(undefined)).toBe(false);
        expect(isValidDiscount(123)).toBe(false);
    });
    // END OF ANSWER
});
