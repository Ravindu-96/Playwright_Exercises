import { test, expect } from '../fixtures/login.fixture';

test.describe('Login Page Validation (Fixture)', () => {
  test('page loads correctly', async ({ loginPage }) => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('login with invalid credentials', async ({ loginPage, page, credentials }) => {
    await loginPage.login(credentials.invalid.username, credentials.invalid.password);
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
  });

  test('login with empty credentials', async ({ loginPage, page }) => {
    await loginPage.loginButton.click();
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
  });

  test('login with valid credentials', async ({ loginPage, page, credentials }) => {
    await loginPage.login(credentials.valid.username, credentials.valid.password);
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });
});
