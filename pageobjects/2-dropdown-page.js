class DropdownPage {
    constructor(page) {
        this.page = page;
        this.heading = page.locator('h3');
        this.dropdown = page.locator('select#dropdown');
    }
    async gotoPage() {
        await this.page.goto("/dropdown");
    }
    async optionSelect(option) {
        await this.dropdown.selectOption(option);
    }
}

export { DropdownPage };