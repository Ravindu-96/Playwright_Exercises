import { test, expect } from '@playwright/test'
import { LoginPage } from '../pageobjects/1-login-page';

// Login Page Validation
test.describe('Login Page Validation', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.gotoPage()
    })

    // Check that the page loads
    test('page loads correctly', async ({ page }) => {
        await expect(loginPage.usernameInput).toBeVisible()
        await expect(loginPage.passwordInput).toBeVisible()
        await expect(loginPage.loginButton).toBeVisible()
    });

    // Invalid credentials
    test('login with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_user', 'invalid_pass')
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
    })

    // Empty credentials
    test('login with empty credentials', async ({ page }) => {
        await loginPage.loginButton.click()
        await expect(page.getByText('Epic sadface: Username is required')).toBeVisible()
    });

    // Valid credentials
    test('login with valid credentials', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce')
        await expect(page.locator('[data-test="title"]')).toBeVisible()
    });

})