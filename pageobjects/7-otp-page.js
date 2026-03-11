class OtpPage {
    constructor(page) {
        this.page = page;
        this.url = "https://practice.expandtesting.com/otp-login";
        this.emailInput = page.locator('#email');
        this.otpSendButton = page.locator('#btn-send-otp');
        this.otpInput = page.locator('#otp');
        this.otpVerifyButton = page.locator('#btn-send-verify');
        this.emailAcc = "ravindu123@mailinator.com"
    }
    async gotoPage() {
        await this.page.goto(this.url);
    }
}

class MailinatorPage {
    constructor(page) {
        this.page = page;
        this.url = "https://www.mailinator.com/v4/public/inboxes.jsp";
        this.inboxField = page.locator('#inbox_field');
        this.inboxEnterButton = page.locator('.primary-btn');
    }

    async gotoPage() {
        await this.page.goto(this.url);
    }
}

export { OtpPage, MailinatorPage };