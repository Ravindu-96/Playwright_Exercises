class CalendarPage {
    constructor(page) {
        this.page = page;
        this.url = "https://practice.expandtesting.com/inputs";

        this.displyInputBtn = page.locator('#btn-display-inputs');
        this.inputNumber = page.locator('#input-number');
        this.inputText = page.locator('#input-text');
        this.inputPassword = page.locator('#input-password');
        this.inputDate = page.locator('#input-date');

        this.outputNumber = page.locator('#output-number');
        this.outputText = page.locator('#output-text');
        this.outputPassword = page.locator('#output-password');
        this.outputDate = page.locator('#output-date');

        this.number = "123";
        this.text = "John Doe";
        this.password = "password123";
        this.date = "2023-05-15";
    }

    async gotoPage() {
        await this.page.goto(this.url);
    }

    async clickDisplayInputBtn() {
        await this.displyInputBtn.click();
    }

    async inputNumberFill(value) {
        await this.inputNumber.fill(value);
    }

    async inputTextFill(value) {
        await this.inputText.fill(value);
    }

    async inputPasswordFill(value) {
        await this.inputPassword.fill(value);
    }

    async inputDateFill(value) {
        await this.inputDate.fill(value);
    }
}

export { CalendarPage };