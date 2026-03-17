import { test, expect } from '@playwright/test';
import { DownloadPage } from '../pageobjects/11-download-page';

// Download a file in specific path
test('Download a file', async ({ page }) => {
    const downloadPage = new DownloadPage(page);
    await downloadPage.gotoPage();
    await expect(downloadPage.downloadBanner).toBeVisible();
    await expect(downloadPage.downloadLink).toBeVisible();

    const downloadPromise = page.waitForEvent('download');
    await downloadPage.clickDownloadLink();
    const download = await downloadPromise;

    const filePath = downloadPage.dnFolder + download.suggestedFilename();
    await download.saveAs(filePath);

    console.log(filePath);

})