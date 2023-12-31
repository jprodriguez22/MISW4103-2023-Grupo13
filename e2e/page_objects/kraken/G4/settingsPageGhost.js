const BasePage = require("./basePage");

class settingsPageGhost3 extends BasePage{

    async navigateToAnnouncementTab(base_url){
        await this.driver.url(base_url+'/ghost/#/settings/announcement-bar/edit')
    }
    async navigateToNavigationTab(base_url){
        await this.driver.url(base_url+'/ghost/#/settings/navigation/edit')
    }
    async navigateToSettingsTab(){
        let button = await this.driver.$('[data-test-nav="settings"]')
        await button.click()
    }
    async addNewPage(title){
        let newPageInput = await this.driver.$('[placeholder="Label"]')
        await newPageInput.setValue(title)
        await newPageInput.keys('Tab')
        await newPageInput.keys(title)
        let updateButton = await this.driver.$("span=Save");        
        await updateButton.click();
    }
    async newAnnouncement(text){
        let textField = await this.driver.$('.kg-prose p')
        let visitorsInput = await this.driver.$('input[value="visitors"]')
        let freeMembersInput = await this.driver.$('input[value="free_members"]')
        let saveButton = await this.driver.$('/html/body/div[2]/div/main/div[1]/div/div/div[4]/section/div/div/div[2]/div[1]/div/button[2]/span')
        await textField.clearValue()
        await textField.setValue(text)
        await visitorsInput.click()
        await freeMembersInput.click()
        await saveButton.click()
    }
    async selectEditTitleSettings(){
        let editTitle = await this.driver.$("/html/body/div[2]/div/main/div[1]/div/div/div[3]/div[2]/div/div[1]/div/div[1]/div[2]/div[2]/div/button")
        await editTitle.click()
    }
    async addNewTitles(name1, name2, name3){
        let titleField = await this.driver.$("input[placeholder='Site title']")
        await titleField.clearValue()
        await titleField.setValue(name1+" "+name2+" "+name3)
        let saveButton = await this.driver.$("button[class^='cursor-pointer  text-green hover:text-green-400']")
        await saveButton.click()

    }
}
module.exports = settingsPageGhost3;