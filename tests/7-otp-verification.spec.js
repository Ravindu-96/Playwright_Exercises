import { test, expect } from '@playwright/test'
import { OtpPage, MailinatorPage } from '../pageobjects/7-otp-page';

test.describe('OTP Verification', () => {
    let webContext;
    let otpPage;
    let mailPage;

    test.beforeAll(async ({ browser }) => {
        webContext = await browser.newContext();

        const page1 = await webContext.newPage();
        otpPage = new OtpPage(page1);

        const page2 = await webContext.newPage();
        mailPage = new MailinatorPage(page2);
    })

    test('Pages loads correctly', async () => {
        await mailPage.gotoPage();
        await expect(mailPage.inboxField).toBeVisible();
        await mailPage.inboxField.fill('rav123');
        await mailPage.inboxEnterButton.click();

        await otpPage.gotoPage();
        await expect(otpPage.emailInput).toBeVisible();
        await otpPage.emailInput.fill('rav123@mailinator.com');
        await otpPage.otpSendButton.click();

        const cell = mailPage.page.locator('td:has-text("Just Now")').first();
        const row = cell.locator('..');
        await row.click();

        const mailBodyLocator = mailPage.page.frameLocator('#html_msg_body').locator('body');
        await expect(mailBodyLocator).toBeVisible();
        const mailBody = await mailBodyLocator.textContent();

        const otpCode = mailBody.match(/\d{6}/)?.[0];

        await otpPage.otpInput.fill(otpCode);
        await otpPage.otpVerifyButton.click();
        await expect(otpPage.page.locator("b:has-text('You logged into a secure area!')")).toBeVisible();

    });
})