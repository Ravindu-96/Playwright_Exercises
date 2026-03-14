import { test, expect } from '@playwright/test';

// Get All Products
test('Get request', async ({ request }) => {
    // Make request and check status code
    const response = await request.get('https://fakestoreapi.com/products');
    expect(response.status()).toBe(200);

    // Convert response to JSON and print
    const result = await response.json();
    expect(result).toBeTruthy();

    // Print number of results
    const resultCount = await result.length;
    console.log(resultCount);

    // Check each have id title price
    for (let i = 0; i < resultCount; i++) {
        expect(result[i].id).toBeTruthy();
        expect(result[i].title).toBeTruthy();
        expect(result[i].price).toBeTruthy();
    }

    
});