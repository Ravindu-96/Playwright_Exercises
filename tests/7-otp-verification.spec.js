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

    test('OTP Verification Flow via UI', async () => {
        // Go to the email page
        await mailPage.gotoPage();
        await expect(mailPage.inboxField).toBeVisible();
        await mailPage.createTempMail(otpPage.tempMail);

        // Go to the OTP page
        await otpPage.gotoPage();
        await expect(otpPage.emailInput).toBeVisible();
        await otpPage.sendOtp(otpPage.emailAcc);

        // Find lastly revieved email and open it
        await mailPage.openMail();

        // Extract recevied email body
        const mailBodyLocator = mailPage.mailBody;
        await expect(mailPage.mailBody).toBeVisible();
        const mailBody = await mailBodyLocator.textContent();

        // Extract OTP code
        const otpCode = mailBody.match(/\d{6}/)?.[0];

        // Enter OTP code in OTP page and verify
        await otpPage.verifyOtp(otpCode);
        await expect(otpPage.successMsg).toBeVisible();

    });
})