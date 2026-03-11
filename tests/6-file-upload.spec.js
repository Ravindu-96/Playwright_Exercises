import { test, expect } from '@playwright/test';
import { FileUploaderPage } from '../pageobjects/6-file-uploder-page';

test.describe('File Upload', () => {
    let fileUploaderPage;

    test.beforeEach(async ({ page }) => {
        fileUploaderPage = new FileUploaderPage(page);
        await fileUploaderPage.gotoPage();
        await expect(page).toHaveTitle('The Internet');
        await expect(fileUploaderPage.chooseFile).toBeVisible();
        await expect(fileUploaderPage.uploadbtn).toBeVisible();
    })

    // Upload a file and verify that the file has been uploaded
    test('Upload a file', async ({ page }) => {
        await fileUploaderPage.uploadFile(fileUploaderPage.filePath);
        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        await expect(fileUploaderPage.fileText).toHaveText(fileUploaderPage.fileName);
    });
})