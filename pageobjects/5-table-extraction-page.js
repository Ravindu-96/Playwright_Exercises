class TablePage {
    constructor(page) {
        this.page = page;
        this.url = "https://the-internet.herokuapp.com/tables";
        this.searchInput = "jdoe@hotmail.com";
        this.table = page.locator('#table1');
        this.tableRows = this.table.locator('tbody tr');
    }
    async gotoPage() {
        await this.page.goto(this.url);
    }
}

export { TablePage };