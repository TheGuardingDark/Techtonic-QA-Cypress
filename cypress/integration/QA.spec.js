/// <reference types="cypress" />

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes'],
  })

describe('React-Router Test', () => {

    it('successfully loads home page and button', () => {
        cy.visit('http://localhost:1234')
        .get('button')
        .should('contain.text', 'Go Treasure Hunting!')    
    })

    it('should load About page with NO gif', () => {
        cy.get('[href="/about"]')
        .click()
        .url()
        .should('eq', 'http://localhost:1234/about')
        .get('img')
        .should('not.exist')
    })

    it('should render Home Page by clicking on header logo', () => {
        cy.get('.header h1')
        .click()
        .url()
        .should('eq', 'http://localhost:1234/')
    })

    it('should click on treasure button and render About page WITH gif', () => {
        cy.get('button')
        .click()
        .url()
        .should('eq', 'http://localhost:1234/about/treasure')
        .get('img')
        .should('exist')
    })

    it('should visit Not Found Page and render green text', () => {
        cy.visit('http://localhost:1234/kittens')
        .get('.page > *')
        .should('have.text', `404: Page '/kittens' Not Found!`)
        .should('have.css', 'color', 'rgb(0, 153, 0)')
    })
})


