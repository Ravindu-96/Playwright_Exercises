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

test.only("UI Date Picker", async ({ page }) => {
    const dob = {
        day: '15',
        month: 'May',
        year: '2025'
    }

    const monthToNumber = {
        January: '01',
        February: '02',
        March: '03',
        April: '04',
        May: '05',
        June: '06',
        July: '07',
        August: '08',
        September: '09',
        October: '10',
        November: '11',
        December: '12',
    };
    const expectedValue = `${monthToNumber[dob.month]}/${dob.day.padStart(2, '0')}/${dob.year}`;

    await page.goto('https://jqueryui.com/datepicker/');
    const frame = page.frameLocator("[src*='/resources/']");
    const datepicker = frame.locator('#datepicker');
    await datepicker.click();

    const cal_month = frame.locator('.ui-datepicker-month');
    const cal_year = frame.locator('.ui-datepicker-year');

    while (true) {
        const month = await cal_month.textContent();
        const year = await cal_year.textContent();
        if (month === dob.month && year === dob.year) {
            await frame.locator("tbody a").filter({ hasText: dob.day }).click();
            break;
        }
        await frame.locator('[title="Prev"]').click();
    }

    await expect(datepicker).toHaveValue(expectedValue);

})