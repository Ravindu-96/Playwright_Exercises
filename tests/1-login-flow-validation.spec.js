import { test, expect } from '@playwright/test'
import { LoginPage } from '../pageobjects/login-page';

// This test validates that the login page of the application loads correctly
//  by checking the visibility of the username and password input fields.
test.only('page loads correctly', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoPage()
    await expect(loginPage.usernameInput).toBeVisible()
    await expect(loginPage.passwordInput).toBeVisible()
    await expect(loginPage.loginButton).toBeVisible()
});

// This test verifies that the application displays an appropriate error messag
// e when a user attempts to log in with invalid credentials.
test('login with invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('invalid_user')
    await page.getByPlaceholder('Password').fill('invalid_pass')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
})

// This test checks that the application prompts the user with an appropriate error message
//  when they attempt to log in without entering any credentials.
test('login with empty credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible()
});

// This test confirms that a user can successfully log in with valid credentials
// and that the application navigates to the expected page after login.
test('login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.locator('[data-test="title"]')).toBeVisible()
});