class FileUploaderPage {
    constructor(page) {
        this.page = page
        this.url = "https://the-internet.herokuapp.com/upload"
        this.chooseFile = page.locator('#file-upload')
        this.uploadbtn = page.locator('#file-submit')
        this.fileText = page.locator('#uploaded-files')
        
        this.filePath = 'test-files/upload-test.txt'
        this.fileName = 'upload-test.txt'
    }

    async gotoPage() {
        await this.page.goto(this.url);
    }

    async uploadFile(filePath) {
        await this.chooseFile.setInputFiles(filePath);
        await this.uploadbtn.click();
    }

}

export { FileUploaderPage };