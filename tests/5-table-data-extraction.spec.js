import { test, expect } from '@playwright/test';
import { TablePage } from '../pageobjects/5-table-extraction-page';

test.describe('Table Data Extraction', async () => {
    let tableRows;
    let tabelRowCount;
    let tablePage;

    test.beforeEach(async ({ page }) => {
        tablePage = new TablePage(page);
        await tablePage.gotoPage();
        tableRows = tablePage.tableRows;
        tabelRowCount = await tableRows.count();
    });

    // Print all table rows in table
    test("Print all table rows", async () => {
        console.log("All table rows - ", await tableRows.allTextContents());
    })

    // Print number of table rows
    test("Print number of table rows", async () => {
        console.log("Number of table rows - ", tabelRowCount);
    })

    // Print row and column number for Search string
    test("Print row and column number for Search string", async () => {
        for (let i = 0; i < tabelRowCount; i++) {
            const cells = tableRows.nth(i).locator('td');
            const cellCount = await cells.count();
            for (let j = 0; j < cellCount; j++) {
                const cellText = await cells.nth(j).textContent();
                if (cellText == tablePage.searchInput) {
                    console.log("Found ", tablePage.searchInput, " at Row " + (i + 1) + " Column " + (j + 1));
                }
            }
        }
    })

    test("Print row and column number for Search string -- Using X path", async () => {
        const row =
            (await tablePage.page.locator(`//table[@id="table1"]/tbody//td[normalize-space(.)="${tablePage.searchInput}"]/parent::tr/preceding-sibling::tr`).count()) + 1;
        const col =
            (await tablePage.page.locator(`//table[@id="table1"]/tbody//td[normalize-space(.)="${tablePage.searchInput}"]/preceding-sibling::td`).count()) + 1;

        console.log("Found ", tablePage.searchInput, " at Row " + row + " Column " + col);

    })

    // Print all cell data
    test("Print all cell data", async () => {
        console.log("All cell data - ");
        for (let i = 0; i < tabelRowCount; i++) {
            const rowCells = await tableRows.nth(i).locator('td').allTextContents();
            console.log("Row " + i + " Cells - ", rowCells);
        }
    })

})