class OtpPage {
    constructor(page) {
        this.page = page;
        this.url = "https://practice.expandtesting.com/otp-login";
        this.tempMail = "rav01"
        this.domain = "mailinator.com"
        this.emailInput = page.locator('#email');
        this.otpSendButton = page.locator('#btn-send-otp');
        this.otpInput = page.locator('#otp');
        this.otpVerifyButton = page.locator('#btn-send-verify');
        this.successMsg = page.locator("b:has-text('You logged into a secure area!')");
        this.emailAcc = `${this.tempMail}@${this.domain}`
    }
    async gotoPage() {
        await this.page.goto(this.url);
    }
    async sendOtp(email) {
        await this.emailInput.fill(email);
        await this.otpSendButton.click();
        await this.page.waitForNavigation();
    }
    async verifyOtp(otp) {
        await this.otpInput.fill(otp);
        await this.otpVerifyButton.click();
    }
}

class MailinatorPage {
    constructor(page) {
        this.page = page;
        this.url = "https://www.mailinator.com/v4/public/inboxes.jsp";
        this.inboxField = page.locator('#inbox_field');
        this.inboxEnterButton = page.locator('.primary-btn');
        this.mailCell = page.locator('td:has-text("Just Now")').first();
        this.mailCellRow = this.mailCell.locator('..');
        this.mailBody = page.frameLocator('#html_msg_body').locator('body');
    }

    async gotoPage() {
        await this.page.goto(this.url);
    }

    async openMail() {
        await this.mailCellRow.click();
    }

    async createTempMail(tempMail) {
        await this.inboxField.fill(tempMail);
        await this.inboxEnterButton.click();
    }
}

export { OtpPage, MailinatorPage };