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
    
    // END OF ANSWER
});

describe('Discount Validation Unit Tests', () => {
    // STUDENT: Implement tests for isValidDiscount
    // requirements:
    // 1. Test "KUDOS10" returns true
    // 2. Test other strings return false

    // ANSWER BEGIN
    
    // END OF ANSWER
});
