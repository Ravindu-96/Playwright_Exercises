import { test, expect } from '@playwright/test';

test.describe('Table Data Extraction', async () => {
    let table;
    let tableRows;
    let tabelRowCount;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/tables');
        table = page.locator('#table1');
        tableRows = table.locator('tbody tr');
        tabelRowCount = await tableRows.count();
    });

    // Print all table rows in table
    test("Print all table rows", async () => {
        console.log("All table rows - ", await tableRows.allTextContents());
    })

    // Print number of table rows
    test("Print number of table rows", async () => {
        console.log("Number of table rows - ", await tableRows.count())
    })

    // Print row and column number for 'jdoe@hotmail.com'
    test("Print row and column number for 'jdoe@hotmail.com'", async () => {
        for (let i = 0; i < tabelRowCount; i++) {
            const cells = tableRows.nth(i).locator('td');
            const cellCount = await cells.count();
            for (let j = 0; j < cellCount; j++) {
                const cellText = await cells.nth(j).textContent();
                if (cellText == 'jdoe@hotmail.com') {
                    console.log("Found 'jdoe@hotmail.com at", " Row " + (i + 1) + " Column " + (j + 1));
                }
            }
        }
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