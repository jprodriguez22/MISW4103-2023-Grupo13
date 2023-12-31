const { Given, When, Then } = require("@cucumber/cucumber");
const configs = require("../../../properties.json");

// Importación de módulos
const LoginPage = require("../../../page_objects/kraken/loginPage");
const LoginPageGhost3 = require("../../../page_objects/kraken/loginPageGhost3");
const PagesPage = require("../../../page_objects/kraken/pagesPage");
const PagesPageGhost3 = require("../../../page_objects/kraken/pagesPageGhost3");
const loginPageNew = require('../../../page_objects/kraken/loginPage3');
const changePasswordNewPage = require('../../../page_objects/kraken/changePasswordPage3');
const SettingsPage = require("../../../page_objects/kraken/settingsPage");
const SettingsPageGhost3 = require("../../../page_objects/kraken/settingsPageGhost3");
const HomePage = require("../../../page_objects/kraken/homePage");
const changePasswordPage = require("../../../page_objects/kraken/changePasswordPage");
const MembersPage = require("../../../page_objects/kraken/membersPage");
const PostsPage = require("../../../page_objects/kraken/postsPage");
const PostsPageGhost3 = require("../../../page_objects/kraken/postsPageGhost3");
const TagsPage = require("../../../page_objects/kraken/tagsPage");
const { clickThemeButton } = require("../../../page_objects/kraken/userPage");
const { clickUserButton } = require("../../../page_objects/kraken/userPage");
const { clickYourProfileButton } = require("../../../page_objects/kraken/userPage");
const { clickPasswordButton } = require("../../../page_objects/kraken/userPage");
const { clickChangePasswordButton } = require("../../../page_objects/kraken/userPage");
const { clickSave } = require("../../../page_objects/kraken/userPage");
const { clickDone } = require("../../../page_objects/kraken/userPage");
const { clickSignOut } = require("../../../page_objects/kraken/userPage");

// Pruebas con datos aleatorios
Given(
    "I login into the page with my email {kraken-string} and password {kraken-string}",
    async function (email, password) {
      loginPageObject = new LoginPage(this.driver);
      return await loginPageObject.login(email, password);
    }
  );
  
  Given('I login into the page 3 with my email {kraken-string} and password {kraken-string}', async function (email, password) {   
      login3PageObject = new loginPageNew(this.driver) 
      return await login3PageObject.login(email, password)    
  });
  
  Given(
      "I login Ghost3 into the page with my email {kraken-string} and password {kraken-string}",
      async function (email, password) {
        loginPageObjectGhost3 = new LoginPageGhost3(this.driver);
        return await loginPageObjectGhost3.login(email, password);
      }
    );
  
  Given("I navigate to the page {kraken-string}", async function (url) {
    await this.driver.url(url);
  });
  
  Given(
    "I take a screenshot with the name {kraken-string}",
    async function (name) {
      return await this.driver.saveScreenshot("./VRTImages/" + name + ".png");
    }
  );
  
  When("I go to the pages tab", async function () {
    pagesPageObject = new PagesPage(this.driver);
    return await pagesPageObject.navigateToTab();
  });

  When(
    "I create a new page with title {kraken-string} and body {kraken-string}",
    async function (title, body) {
      pagesPageObject = new PagesPage(this.driver);
      return await pagesPageObject.prepareNewPage(title, body);
    }
  );

  Given("I navigate to members page", async function () {
    await this.driver.url("http://146.190.196.137:2368/ghost/#/members");
  });

  When(
      "I create Ghost3 a new page with title {kraken-string} and body {kraken-string}",
      async function (title, body) {
        pagesPageObjectGhost3 = new PagesPageGhost3(this.driver);
        return await pagesPageObjectGhost3.prepareNewPage(title, body);
      }
    );
  
  When("I publish the new page", async function () {
    pagesPageObject = new PagesPage(this.driver);
    return await pagesPageObject.publishCurrentPage();
  });
  
  When("I publish Ghost3 the new page", async function () {
      pagesPageObjectGhost3 = new PagesPageGhost3(this.driver);
      return await pagesPageObjectGhost3.publishCurrentPage();
    });
  
  When("I return to the pages list", async function () {
    await pagesPageObject.exitAfterPublish();
    await pagesPageObject.exitEditor();
    return;
  });
  When(
    "I go to the announcement settings with base_url {kraken-string}",
    async function (base_url) {
      settingsPageObject = new SettingsPage(this.driver);
      await settingsPageObject.navigateToAnnouncementTab(base_url);
      return;
    }
  );
  
  When(
    "I create a new announcement with the text {kraken-string}",
    async function (text) {
      return await settingsPageObject.newAnnouncement(text);
    }
  );
  
  When("I click on 'Change theme' Button", async function () {
    await clickThemeButton(this.driver);
  });
  
  When("I click on the 'User' Button", async function () {
    await clickUserButton(this.driver);
  });
  
  When("I click on 'Your Profile' Button", async function () {
    await clickYourProfileButton(this.driver);
  });
  
  When("I click on 'Sign Out' Button", async function () {
    await clickSignOut(this.driver);
  });
  
  When(
    "I create a post with title {kraken-string} and body {kraken-string}",
    async function (title, body) {
      postsPageObject = new PostsPage(this.driver);
      return await postsPageObject.prepareNewPost(title, body);
    }
  );
  
  When(
      "I create Ghost3 a post with title {kraken-string} and body {kraken-string}",
      async function (title, body) {
        postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
        return await postsPageObjectGhost3.prepareNewPost(title, body);
      }
  );
  
  When("I publish the new post", async function () {
    return await postsPageObject.publishCurrentPost();
  });
  
  When("I publish Ghost3 the new post", async function () {
      postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
      return await postsPageObjectGhost3.publishCurrentPost();
    });
  
  When(
    "I select a post created with name {kraken-string}",
    async function (name) {
      postsPageObject = new PostsPage(this.driver);
      return await postsPageObject.selectCurrentPost(name);
    }
  );
  
  When(
      "I select Ghost3 a post created with name {kraken-string}",
      async function (name) {
        postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
        return await postsPageObjectGhost3.selectCurrentPost(name);
      }
  );
  
  When(
    "I modify data the a post created with title {kraken-string} and body {kraken-string}",
    async function (title, body) {
      postsPageObject = new PostsPage(this.driver);
      return await postsPageObject.prepareEditPost(title, body);
    }
  );
  
  When(
      "I modify Ghost3 data the a post created with title {kraken-string} and body {kraken-string}",
      async function (title, body) {
        postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
        return await postsPageObjectGhost3.prepareEditPost(title, body);
      }
    );
  
  When(
    "I create a member with name {kraken-string} and email {kraken-string}",
    async function (name, email) {
      return await membersPageObject.prepareNewMember(name, email);
    }
  );
  
  When("I click on 'Change Password' Button", async function () {
    await clickPasswordButton(this.driver);
  });
  
  When(
    "I write my current password {kraken-string} and my new password {kraken-string}",
    async function (password, newPassword) {
      changePasswordPageObject = new changePasswordPage(this.driver);
      return await changePasswordPageObject.changePassword(password, newPassword);
    }
  );
  
  When("I click on 'Change Password red' Button", async function () {
    await clickChangePasswordButton(this.driver);
  });
  
  When("I click on 'Save' Button", async function () {
    await clickSave(this.driver);
  });
  
  When("I click on 'Done' Button", async function () {
    await clickDone(this.driver);
  });
  
  When("I go to the members tab", async function () {
    // Prueba 15 //
    membersPageObject = new MembersPage(this.driver);
    return await membersPageObject.navigateToMembers();
  });
  
  When("I go to the posts tab", async function () {
    //Prueba 11 //
    postsPageObject = new PostsPage(this.driver);
    return await postsPageObject.navigateToPosts();
  });
  
  When("I go Ghost3 to the posts tab", async function () {
      postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
      return await postsPageObjectGhost3.navigateToPosts();
    });
  
  When("I go to the tags tab", async function () {
    // Para 8-9 //
    tagsPageObject = new TagsPage(this.driver);
    return await tagsPageObject.navigateToTags();
  });
  
  When("I go to create a new tag", async function () {
    // Para 8-9 //
    tagsPageObject = new TagsPage(this.driver);
    return await tagsPageObject.createTag();
  });
  
  When("I add a name member {kraken-string}", async function (nombre) {
    // Para 8-9 //
    return await membersPageObject.createMember(nombre);
  });
  
  When("I add a email member {kraken-string}", async function (correo) {
    // Para 8-9 //
    return await membersPageObject.emailMember(correo);
  });
  
  When("I set a tag for member {kraken-string}", async function (tag) {
    // Para 8-9 //
    membersPageObject = new MembersPage(this.driver);
    return await membersPageObject.tagMember(tag);
  });
  
  When("I select a member", async function () {
    // Prueba 15 //
    return await membersPageObject.selectMember();
  });
  
  When("I select a post", async function () {
    // Para 8-11 //
    return await postsPageObject.selectPost();
  });
  
  When("I select a post to put a tag", async function () {
    postsPageObject = new PostsPage(this.driver); // Prueba 8 //
    return await postsPageObject.selectRandomPost();
  });
  
  When("I select another post to put a tag", async function () {
    // Prueba 8 //
    return await postsPageObject.selectPubs();
  });
  
  When("I select to relate a tag for the post", async function () {
    // Prueba 8 //
    await postsPageObject.relateTag();
    await postsPageObject.selectTheTag();
    return;
  });
  
  When("I select a tag", async function () {
    // Para 9 //
    return await tagsPageObject.selectTag();
  });
  
  When("I add a descriptive note {kraken-string}", async function (note) {
    // Prueba 15 //
    return await membersPageObject.addDescriptiveNote(note);
  });
  
  When("I insert a tag name {kraken-string}", async function (tag) {
    // Prueba 8 //
    return await tagsPageObject.insertName(tag);
  });
  
  When("I modify a tag name {kraken-string}", async function (tag) {
    // Prueba 9 //
    return await tagsPageObject.modifyName(tag);
  });
  
  When("I save the note", async function () {
    // Prueba 15 //
    return await membersPageObject.saveNote();
  });
  
  When("I save the member with tag", async function () {
    // Prueba 15 //
    return await membersPageObject.saveNote();
  });
  
  When("I save the tag name", async function () {
    // Prueba 8-9 //
    return await tagsPageObject.saveName();
  });
  
  When("I unpublish the post", async function () {
    // Prueba 11 //
    return await postsPageObject.unpublishCurrentPost();
  });
  
  When("I update the post", async function () {
    // Prueba 11 //
    postsPageObject = new PostsPage(this.driver);
    return await postsPageObject.updatePost();
  });
  
  When("I update Ghost3 the post", async function () {
      postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
      return await postsPageObjectGhost3.updatePost();
    });
  
  When("I return to the posts list", async function () {
    // Prueba 8-11 //
    return await postsPageObject.exitEditor();
  });
  
  When("I navigate to the posts list", async function () {
    // Prueba 8-9-11 //
    return await tagsPageObject.navigatePosts();
  });
  
  Then("I apply the filters to tags and see the updated name", async function () {
    postsPageObject = new PostsPage(this.driver); // Prueba 9 //
    return await postsPageObject.filterAllTags();
  });
  
  Then("I apply the filters to see the new tag", async function () {
    // Prueba 8 //
    return await postsPageObject.filterAllTags();
  });
  
  Then("I apply the filters to see the members", async function () {
    // Prueba 6 //
    return await membersPageObject.filterMembers();
  });
  
  Then("I validate the note is saved for the member", async function () {
    // Prueba 15//
    return await membersPageObject.validateNote();
  });
  
  Then("I validate the post isnt in the blog", async function () {
    // Prueba 11 //
    return await postsPageObject.validateBlog();
  });
  
  When("I add a descriptive name {kraken-string}", async function (note) {
    // Prueba 15 //
    return await membersPageObject.addDescriptiveName(note);
  });
  
  When("I change email {kraken-string}", async function (mail) {
    // Prueba 7 //
    return await membersPageObject.changeEmail(mail);
  });
  
  //Prueba 14 Ghost 3
  
  When('I write my current password 3 {kraken-string} and my new password {kraken-string}', async function (password, newPassword) {   
      changePasswordPageObject3 = new changePasswordNewPage(this.driver) 
      return await changePasswordPageObject3.changePassword(password, newPassword)    
  });
  
  When("I click on 'Change Password red 3' Button", async function(){
      await clickChangePasswordButton3(this.driver);
  });
  
  //Prueba 16 Ghost 3
  When('I go to the pages tab 3', async function() {
      pagesPageObject3 = new PagesPage(this.driver)
      return await pagesPageObject3.navigateToTab3()
  });
  When("I click on the 'New page 3' Button", async function(){
      return await pagesPageObject3.clickNewPage3();
  });
  When('I create a new page 3 with title {kraken-string} and body {kraken-string}', async function(title, body) {
      return await pagesPageObject3.prepareNewPage3(title, body)
  });
  When("I click on the 'Publish 3' Button", async function(){
      return await pagesPageObject3.clickSaveNewPage3();
  });
  
  When('I delete the post 3 with name {kraken-string}', async function(name){
      return await pagesPageObject3.deletePage3(name)
  });
  
  //Prueba 17 Ghost 3
  When("I click on 'Settings tab' Button", async function(){
      settingsPageObject3 = new SettingsPage(this.driver)
      return await settingsPageObject3.navigateToSettingsGeneralTab();
  });
  When("I click on 'Expand title' Button", async function(){
      return await settingsPageObject3.expandTitle();
  });
  When('I add a descriptive title to the page {kraken-string}', async function(title) {   // Prueba 15 //
      return await settingsPageObject3.changeTitle(title);
  });
  Then("I click on 'Save title' Button", async function(){
      return await settingsPageObject3.saveTitle();
  });
  
  //Prueba 21 Ghost 3
  
  When("I click on the 'Ghost 3 User' Button", async function () {
      await clickUserButton3(this.driver);
  });
  
  When("I click on 'Ghost 3 Your Profile' Button", async function () {
      await clickYourProfileButton3(this.driver);
  });
  
  When('I add a descriptive bio {kraken-string}', async function(bio) {   // Prueba 15 //
      membersPageObject = new MembersPage(this.driver)
      return await membersPageObject.addDescriptiveBio(bio);
  });
  
  //Ghost 5
  When('I add a descriptive bio 5 {kraken-string}', async function(bio) {   // Prueba 15 //
      membersPageObject = new MembersPage(this.driver)
      return await membersPageObject.addDescriptiveBio5(bio);
  });
  When("I click on 'Save Bio 5' Button", async function(){
      membersPageObject = new MembersPage(this.driver)
      return await membersPageObject.saveBio5();
  });
  
  When('I navigate to the dashboard page {string}', async function(url) { 
      await this.driver.url(url);
  });
  //
  
  When("I click on 'Save Bio' Button", async function(){
      membersPageObject = new MembersPage(this.driver)
      return await membersPageObject.saveBio();
  });
  //Prueba 22 Ghost 3
  
  When("I click on the 'Labs tab' Button", async function () {
      settingsPageObject3 = new SettingsPage(this.driver)
      return await settingsPageObject3.navigateToLabsTab();
  
  });
  
  When("I click on 'Delete all content' Button", async function () {
      return await settingsPageObject3.clickDelete();
  });
  
  When("I click on 'Confirm delete' Button", async function () {
      return await settingsPageObject3.clickConfirmDelete();
  });
  
  When("I go to the lab tab", async function(){
      settingsPageObject = new SettingsPage(this.driver)
      return await settingsPageObject.navigateToLabTab()
  });
  
  When("I click on 'Open 5' Button", async function () {
      return await settingsPageObject.Open();
  });
  
  When("I click on 'Delete all content 5' Button", async function () {
      return await settingsPageObject.clickDelete5();
  });
  
  When("I click on 'Confirm delete 5' Button", async function () {
      return await settingsPageObject.clickConfirmDelete5();
  });
  
  When("I click on 'Settings' Button", async function () {
    return await membersPageObject.clickSettings();
  });
  
  When("I click on 'Delete' Button", async function () {
    return await membersPageObject.delete();
  });
  
  When("I click on 'Confirm' Button", async function () {
    return await membersPageObject.confirm();
  });
  
  When("I go to the settings tab", async function () {
    settingsPageObject = new SettingsPage(this.driver);
    return await settingsPageObject.navigateToSettingsTab();
  });
  
  When("I go Ghost3 to the settings tab", async function () {
      settingsPageObjectGhost3 = new SettingsPageGhost3(this.driver);
      return await settingsPageObjectGhost3.navigateToSettingsTab();
    });
  
  When("I select edit title settings", async function () {
    return await settingsPageObject.selectEditTitleSettings();
  });
  
  When(
    "I add one {kraken-string} two {kraken-string} and three {kraken-string} names to the page title",
    async function (one, two, three) {
      return await settingsPageObject.addNewTitles(one, two, three);
    }
  );
  
  Then('I navigate to the page 3 with name {kraken-string} and port {kraken-string}', async function(name, port){
    return await this.driver.url("http://"+configs.BASEURL+":"+port+"/"+name)
  });
  
  Then("I navigate to the page with name {kraken-string} and port {kraken-string}", async function (name, port) {
      return await this.driver.url("http://" + configs.BASEURL + ":" + port + "/" + name);
    }
  );
  
  Then(
    "I go to the navigations settings with base_url {kraken-string}",
    async function (base_url) {
      settingsPageObject = new SettingsPage(this.driver);
      await settingsPageObject.navigateToNavigationTab(base_url);
      return;
    }
  );
  
  Then(
    "I add the page {kraken-string} to the website navigation",
    async function (page) {
      settingsPageObject = new SettingsPage(this.driver);
      await settingsPageObject.addNewPage(page);
      return;
    }
  );
  
  Then(
      "I add Ghost3 the page {kraken-string} to the website navigation",
      async function (page) {
        settingsPageObjectGhost3 = new SettingsPageGhost3(this.driver);
        await settingsPageObjectGhost3.addNewPage(page);
        return;
      }
    );
  
  Then(
    "I click on the navbar page with name {kraken-string}",
    async function (name) {
      homePageObject = new HomePage(this.driver);
      await homePageObject.selectNavPage(name);
      return;
    }
  );
  
  Then("I delete the post with name {kraken-string}", async function (name) {
    return await pagesPageObject.deletePage(name);
  });
  
  Then("I delete Ghost3 the post with name {kraken-string}", async function (name) {
      pagesPageObjectGhost3 = new PagesPageGhost3(this.driver);
      return await pagesPageObjectGhost3.deletePage(name);
    });
  
  Then(
    "I navigate to the post with name {kraken-string} and port {kraken-string}",
    async function (name, port) {
      return await this.driver.url(
        "http://" + configs.BASEURL + ":" + port + "/" + name
      );
    }
  );
  
  Then(
    "I delete the post created with name {kraken-string}",
    async function (name) {
      postsPageObject = new PostsPage(this.driver);
      return await postsPageObject.deletePost(name);
    }
  );
  
  Then(
      "I delete Ghost3 the post created with name {kraken-string}",
      async function (name) {
        postsPageObjectGhost3 = new PostsPageGhost3(this.driver);
        return await postsPageObjectGhost3.deletePost(name);
      }
  );
  
  Then(
    "I navigate to the member with name {kraken-string} and port {kraken-string}",
    async function (name, port) {
      return await this.driver.url(
        "http://" + configs.BASEURL + ":" + port + "/" + name
      );
    }
  );
  
  Then('I navigate to the home page {string}', async function(url) { 
    await this.driver.url(url);
  });
  
  Then("I click on 'View Site Tab' Button", async function(){
    return await settingsPageObject3.navigateToViewSiteTab();
  });