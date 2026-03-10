import { test, expect } from '@playwright/test'
import { LoginPage } from '../pageobjects/1-login-page';

// This test suite contains a series of tests that validate the login flow of the application
test.describe('Login Page Validation', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.gotoPage()
    })

    // This test validates that the login page of the application loads correctly
    test('page loads correctly', async ({ page }) => {
        await expect(loginPage.usernameInput).toBeVisible()
        await expect(loginPage.passwordInput).toBeVisible()
        await expect(loginPage.loginButton).toBeVisible()
    });

    // This test verifies that the application displays an appropriate error message
    test('login with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_user', 'invalid_pass')
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
    })

    // This test checks that the application prompts the user with an appropriate error message
    test('login with empty credentials', async ({ page }) => {
        await loginPage.loginButton.click()
        await expect(page.getByText('Epic sadface: Username is required')).toBeVisible()
    });

    // This test confirms that a user can successfully log in with valid credentials
    test('login with valid credentials', async ({ page }) => {
        await loginPage.login('standard_user', 'secret_sauce')
        await expect(page.locator('[data-test="title"]')).toBeVisible()
    });

})