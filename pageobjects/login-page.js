class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('.submit-button');
    }
    async gotoPage(url) {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async getPageTitle() {
        await this.page.goto('https://www.saucedemo.com/')
    }
}
export { LoginPage };
