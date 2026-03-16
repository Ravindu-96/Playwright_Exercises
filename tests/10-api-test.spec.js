import { test, expect } from '@playwright/test';

// Get - All Products
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

// Get - Single Product
test('Get request for single product', async ({ request }) => {
    // Make request and check status code
    const response = await request.get('https://fakestoreapi.com/products/1');
    expect(response.status()).toBe(200);

    // Convert response to JSON and print
    const result = await response.json();
    expect(result).toBeTruthy();

    // Check each have id title price
    expect(result.id).toBeTruthy();
    expect(result.title).toBeTruthy();
    expect(result.price).toBeTruthy();

    console.log(result);
})

// Post - Create Product
test('Post request', async ({ request }) => {
    const product = {
        title: "Test Product",
        price: 100,
    }

    const response = await request.post('https://fakestoreapi.com/products', {
        data: product
    });

    // Check status 200 or 201
    expect([200, 201]).toContain(response.status());

    // Verify response Content
    const result = await response.json();
    expect(result.id).toBeTruthy();
    expect(result.title).toBe(product.title);
    expect(result.price).toBe(product.price);
})

// Put - Update Product --> Update Whole Product
test('Put request', async ({ request }) => {
    const product = {
        title: "Test Product Updated",
        price: 101,
    }

    const response = await request.put('https://fakestoreapi.com/products/1', {
        data: product
    });

    // Check status 200
    expect([200]).toContain(response.status());

    // Verify response Content
    const result = await response.json();
    expect(result.id).toBeTruthy();
    expect(result.title).toBe(product.title);
    expect(result.price).toBe(product.price);

    console.log(result);
})

// Patch - Update Product --> Update Partial Product
test('Patch request', async ({ request }) => {
    const product = {
        title: "Test Product Patch",
    }

    const response = await request.patch('https://fakestoreapi.com/products/1', {
        data: product
    });

    // Check status 200
    expect([200]).toContain(response.status());

    // Verify response Content
    const result = await response.json();
    expect(result.id).toBeTruthy();
    expect(result.title).toBe(product.title);

    console.log(result);
})

// Delete - Delete Product
test('Delete request', async ({ request }) => {
    const response = await request.delete('https://fakestoreapi.com/products/1');

    // Check status 200
    expect([200]).toContain(response.status());

    // Verify response Content
    const result = await response.json();
    expect(result.id).toBeTruthy();
    console.log(result);
})