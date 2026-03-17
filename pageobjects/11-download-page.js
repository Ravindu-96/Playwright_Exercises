class DownloadPage {
    constructor(page) {
        this.page = page;
        this.url = "https://the-internet.herokuapp.com/download";
        this.downloadBanner = page.locator('//h3[contains(text(),"File Downloader")]');
        this.downloadLink = page.locator('a[href*="demo_file"]');
        this.dnFolder = 'file-download/';
    }

    async gotoPage() {
        await this.page.goto(this.url);
    }

    async clickDownloadLink() {
        await this.downloadLink.click();
    }
}

export { DownloadPage };