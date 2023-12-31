/// <reference types="cypress" />
const loginPage = require('../../../../../page_objects/cypress/loginPage.json')
const pagesPage = require('../../../../../page_objects/cypress/pagesPage.json')
const settingsPage = require('../../../../../page_objects/cypress/settingsPage.json')
const homePage = require('../../../../../page_objects/cypress/homePage.json')
const properties = require('../../../../../properties.json')
const MockarooInterface = require('../../../../../page_objects/cypress/mockarooInterface')

context('#13 Crear una página nueva y agregarla en el navbar', () => {
  // Given I login to my website
  beforeEach(name, () => {
    cy.viewport('macbook-16'),
    cy.visit(properties.GHOST5),
    cy.get(loginPage.elementEmail).type(properties.LOGINEMAIL),
    cy.get(loginPage.elementPassword).type(properties.LOGINPASSWORD),
    cy.get(loginPage.loginButton).click(),
    cy.wait(1000)
})
  // When I create a new page
  it('Crear una nueva página', () => {
    const mockInterface = new MockarooInterface()
    const mockUser = mockInterface.prioriInitializeUsers()
    const reallyLongString255 = "J9c6h9h6cr2uQmnUDPDme58HezaZS9T7h72Tcmdx93ZePDiyPdv2LXbCGTDE124DiLN3DXqjVFe3GHJv4u3ppCmEF77XKiFW55p6La3cz009fUGidfp5dwMZxyniz001nQDnMHRGyk4ZvJXd4dJqmf0Zpp8qrrQKujFxBdaHQ7gN9mKmXD6JYqcfMVktFdaTppFtE3wC8Uht8aCmAa5giDBgcXBc9R1VZCwvVdRdE31meJAEJjRj6bR1tFJumke"
    const user1 = mockInterface.getRandom(mockUser)
    cy.get(pagesPage.panelButton).click()    
    cy.get(pagesPage.newPageButton).click()
    cy.wait(1000)
    const pageTitle = reallyLongString255 // And add a dynamic random age to the page title
    cy.get(pagesPage.newPagetitleField).type(pageTitle)
    cy.get(pagesPage.newPagePostField).type(user1.biography)
    cy.wait(3000)
    cy.get(pagesPage.publishButton).click()
    cy.get(pagesPage.continueButton).click()
    cy.get(pagesPage.confirmButton).click()

    cy.visit(properties.GHOST5)
    cy.visit(settingsPage.navigationSettingsURL)
    cy.wait(1000)
    cy.get(settingsPage.newNavInput).filter(':visible').type(pageTitle)
    cy.get(settingsPage.newNavUrl).filter(':visible').last().type(pageTitle.toLowerCase().replace(/[@. ]/g, "-")).type('{enter}')
    cy.wait(1000)
    cy.get(settingsPage.newNavOkButton).click()
    // Then I navigate to the homepage and select the element in the navbar
    cy.visit(homePage.url)
    cy.wait(2000)
    cy.get('.nav-'+pageTitle.toLowerCase().replace(/[@. ]/g, "-")).click({ force: true })
    })
  })