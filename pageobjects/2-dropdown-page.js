class DropdownPage {
    constructor(page) {
        this.url = "https://the-internet.herokuapp.com/dropdown";
        this.page = page;
        this.heading = page.locator('h3');
        this.dropdown = page.locator('select#dropdown');
    }
    async gotoPage() {
        await this.page.goto(this.url);
    }
    async optionSelect(option) {
        await this.dropdown.selectOption(option);
    }
}

export { DropdownPage };