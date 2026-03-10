import { test, expect } from '@playwright/test'
import { JsAlertPage } from '../pageobjects/4-alerts-page';

test.describe('Javascript Alerts', () => {
    let alertPage;

    test.beforeEach(async ({ page }) => {
        alertPage = new JsAlertPage(page);
        await alertPage.gotoPage();
        await expect(page).toHaveTitle('The Internet');
    })

    // Check that the page loads
    test('Page loads correctly', async () => {
        await expect(alertPage.jsAlertButton).toBeVisible();
        await expect(alertPage.jsConfirmButton).toBeVisible();
        await expect(alertPage.jsPromptButton).toBeVisible();
    });

    // JS Alert Accept
    test('JS Alert Accept', async ({ page }) => {
        page.on('dialog', dialog => dialog.accept());
        await alertPage.clickJsAlertButton();
        await expect(page).toHaveURL(alertPage.url);
    });

    // JS Confirm Accept
    test('JS Confirm Accept', async ({ page }) => {
        page.on('dialog', dialog => dialog.accept());
        await alertPage.clickJsConfirmButton();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    });

    // JS Confirm Dismiss
    test('JS Confirm Dismiss', async ({ page }) => {
        page.on('dialog', dialog => dialog.dismiss());
        await alertPage.clickJsConfirmButton();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    });

    // JS Prompt type
    test('JS Prompt', async ({ page }) => {
        page.on('dialog', dialog => dialog.accept('alert'));
        await alertPage.clickJsPromptButton();
        await expect(page.locator('#result')).toHaveText('You entered: alert');
    });
})