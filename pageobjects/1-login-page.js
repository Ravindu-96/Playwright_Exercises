class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = "https://www.saucedemo.com/";
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('.submit-button');
    }
    async gotoPage() {
        await this.page.goto(this.url);
    }
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
export { LoginPage };
