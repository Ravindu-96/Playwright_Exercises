import { test, expect } from '@playwright/test';
import { CalendarPage } from '../pageobjects/9-calendar-page';


test.describe('Calendar Automation Flow', () => {
    let calendarPage;

    test.beforeEach(async ({ page }) => {
        calendarPage = new CalendarPage(page);
        await calendarPage.gotoPage();
        await expect(calendarPage.displyInputBtn).toBeVisible();
        await expect(calendarPage.inputNumber).toBeVisible();
        await expect(calendarPage.inputText).toBeVisible();
        await expect(calendarPage.inputPassword).toBeVisible();
        await expect(calendarPage.inputDate).toBeVisible();
    })

    test('Fill the form and verify inputs', async () => {
        // Fill the form
        await calendarPage.inputNumber.fill(calendarPage.number);
        await calendarPage.inputText.fill(calendarPage.text);
        await calendarPage.inputPassword.fill(calendarPage.password);
        await calendarPage.inputDate.fill(calendarPage.date);

        // Click Display Inputs button
        await calendarPage.displyInputBtn.click();

        // Verify inputs
        await expect(calendarPage.outputNumber).toHaveText(calendarPage.number);
        await expect(calendarPage.outputText).toHaveText(calendarPage.text);
        await expect(calendarPage.outputPassword).toHaveText(calendarPage.password);
        await expect(calendarPage.outputDate).toHaveText(calendarPage.date);
    })
})