class JsAlertPage {
    constructor(page) {
        this.url = "https://the-internet.herokuapp.com/javascript_alerts";
        this.page = page;
        this.jsAlertButton = page.locator('button:has-text("Click for JS Alert")');
        this.jsConfirmButton = page.locator('button:has-text("Click for JS Confirm")');
        this.jsPromptButton = page.locator('button:has-text("Click for JS Prompt")');
    }
    async gotoPage() {
        await this.page.goto(this.url);
    }
    async clickJsAlertButton() {
        await this.jsAlertButton.click();
    }
    async clickJsConfirmButton() {
        await this.jsConfirmButton.click();
    }
    async clickJsPromptButton() {
        await this.jsPromptButton.click();
    }
}

export { JsAlertPage };
