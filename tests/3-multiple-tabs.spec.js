import { test, expect } from '@playwright/test'

test('Multiple Tabs', async ({ browser }) => {
    const context = await browser.newContext();

    const googlePage = await context.newPage();
    await googlePage.goto('https://www.google.com/');
    console.log(await googlePage.title());

    const youtubePage = await context.newPage();
    await youtubePage.goto('https://www.youtube.com/');
    console.log(await youtubePage.title());

    const facebookPage = await context.newPage();
    await facebookPage.goto('https://www.facebook.com/');
    console.log(await facebookPage.title());

    // Switch to Google page and check title
    await expect(googlePage).toHaveTitle('Google');

    // Close tabs
    await googlePage.close();
    await facebookPage.close();

    // Switch to YouTube page and check title
    await expect(youtubePage).toHaveTitle('YouTube');
});