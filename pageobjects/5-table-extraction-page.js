class TablePage {
    constructor(page) {
        this.url = "https://the-internet.herokuapp.com/tables";
        this.searchInput = "jdoe@hotmail.com";
        this.page = page;
        this.table = page.locator('#table1');
        this.tableRows = this.table.locator('tbody tr');
    }
    async gotoPage() {
        await this.page.goto(this.url);
    }
}

export { TablePage };