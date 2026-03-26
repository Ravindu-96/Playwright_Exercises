import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/1-login-page';

export const test = base.extend({
  async loginPage({ page }, use) {
    const loginPage = new LoginPage(page);
    await loginPage.gotoPage();
    await use(loginPage);
  },

  async credentials({}, use) {
    await use({
      valid: {
        username: 'standard_user',
        password: 'secret_sauce',
      },
      invalid: {
        username: 'invalid_user',
        password: 'invalid_pass',
      },
    });
  },
});

export { expect };
