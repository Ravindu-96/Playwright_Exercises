import { test, expect } from '@playwright/test'
import { DropdownPage } from '../pageobjects/2-dropdown-page';

// Dropdown Selection with assertions
test('Dropdown Selection', async ({ page }) => {
    const dropdownPage = new DropdownPage(page);
    await dropdownPage.gotoPage();
    await expect(dropdownPage.heading).toBeVisible();

    await expect(dropdownPage.dropdown).toBeVisible();
    await dropdownPage.optionSelect('2');
    await expect(dropdownPage.dropdown).toHaveValue('2');
})